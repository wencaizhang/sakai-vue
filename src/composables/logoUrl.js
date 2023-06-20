import { computed } from 'vue';
import { useLayout } from '@/layout/composables/layout';

const { VITE_LOGO_DARK, VITE_LOGO_WHITE } = import.meta.env;

const { layoutConfig } = useLayout();
export const logoUrl = computed(() => {
    return layoutConfig.darkTheme.value ? VITE_LOGO_WHITE : VITE_LOGO_DARK;
});
