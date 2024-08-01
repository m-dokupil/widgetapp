// widgets/a.js
import { Widget } from '../X.js';

class A extends Widget {
    async init(target, done) {
        super.init(target, done);
        const content = document.createElement('div');
        content.textContent = 'Widget A';
        target.appendChild(content);
        done();
    }

    destroy() {
        super.destroy();
    }
}

export default A;
