import { ThemePalette } from '@angular/material/core';

export interface ModalButton {
    action?(): void | Promise<void>;

    dissmiss?: boolean;
    faicon?: string;
    color?: ThemePalette;
    text?: string;
}
