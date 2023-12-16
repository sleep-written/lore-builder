import { ModalButton } from './modal-button';

export interface ModalOptions {
    title: string;
    text: string;
    icon: string;
    buttons: ModalButton[];
    timeout?: number;
}