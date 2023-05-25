import CodeHighlight from '@/components/CodeHighlight.vue';
import BlockViewer from '@/components/BlockViewer.vue';

/**
 * 全局注册自定义组件
 * @param app
 */
export function setupCustomComponents(app) {
    app.component('CodeHighlight', CodeHighlight);
    app.component('BlockViewer', BlockViewer);
}
