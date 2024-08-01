export class Widget {
    constructor() {
        this.target = null;
    }

    async init(target, done) {
        this.target = target;
        done();
    }

    destroy() {
        if (this.target) {
            this.target.innerHTML = '';  // Clear the content
        }
        this.target = null;
    }
}

export class X {
    static async init(target, callback, resolver = (path) => this.defaultResolver(path)) {
        try {
            await this._initWidgets(target, resolver);
            if (callback) callback();
        } catch (error) {
            if (callback) callback(error);
        }
    }

    static async _initWidgets(target, resolver) {
        const widgets = [];

        const findWidgets = (node) => {
            if (node.getAttribute && node.getAttribute('widget')) {
                widgets.push(node);
            }
            node.childNodes.forEach(findWidgets);
        };
        findWidgets(target);

        for (const node of widgets.reverse()) {
            const widgetPath = node.getAttribute('widget');
            try {
                const WidgetModule = await resolver(widgetPath);
                const widgetInstance = new WidgetModule.default();
                await widgetInstance.init(node, () => {});
                node.widgetInstance = widgetInstance;  // Track widget instance
            } catch (error) {
                throw new Error(`Failed to initialize widget at ${widgetPath}: ${error.message}`);
            }
        }
    }

    static destroy(target) {
        this._destroyWidgets(target);
    }

    static _destroyWidgets(target) {
        const widgets = [];
        const findWidgets = (node) => {
            if (node.widgetInstance) {
                widgets.push(node);
            }
            node.childNodes.forEach(findWidgets);
        };
        findWidgets(target);

        for (const node of widgets.reverse()) {
            if (node.widgetInstance) {
                node.widgetInstance.destroy();
                delete node.widgetInstance;  // Remove reference to the widget instance
            }
        }
    }

    static async defaultResolver(path) {
        if (typeof window !== 'undefined') {
            // Browser environment
            return import(`./${path}.js`);
        } else {
            // Node.js environment
            const module = await import(`./${path}.js`);
            return module;
        }
    }
}
