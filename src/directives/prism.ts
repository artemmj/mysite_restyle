import { Directive } from 'vue';
import Prism from '../utils/prism';

export const prismDirective: Directive = {
    mounted(el) {
        Prism.highlightAllUnder(el);
    },
    updated(el) {
        Prism.highlightAllUnder(el);
    }
};
