// widgets/b.js
import { Widget } from '../X.js';

class B extends Widget {
    async init(target, done) {
        super.init(target, done);
        const content = document.createElement('div');
        content.textContent = 'Widget B';
        target.appendChild(content);
        done();
    }

    destroy() {
        super.destroy();
        // Cleanup code here
    }
}

export default B;
