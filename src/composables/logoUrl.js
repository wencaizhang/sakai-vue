import { computed } from 'vue';
import { useLayout } from '@/layout/composables/layout';

const { layoutConfig } = useLayout();
export const logoUrl = computed(() => {
    return `layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
});
