// widgets/c.js
import { Widget } from '../X.js';

class C extends Widget {
    async init(target, done) {
        super.init(target, done);
        const content = document.createElement('div');
        content.textContent = 'Widget C';
        target.appendChild(content);
        done();
    }

    destroy() {
        super.destroy();
        // Cleanup code here
    }
}

export default C;
