export interface Menu {
    id: number;
    name: string;
    icon?: string | null;
    path: string;
    logged: boolean;
    visible: boolean;
    parent?: Menu | null;
    children?: Menu[] | null;
}