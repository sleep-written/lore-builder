import { ThemePalette } from '@angular/material/core';

export interface ModalButton {
    icon: string;
    text: string;
    hold?: boolean;
    color?: ThemePalette;
    action?: () => void | Promise<void>;
}
