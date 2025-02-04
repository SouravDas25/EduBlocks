import * as DAPjs from './lib/dapjs';

declare global {
    interface Window {
        transport: DAPjs.WebUSB;
        daplink: DAPjs.DAPLink;
    }

    class Terminal {
        cols: number;
        rows: number;
        element: HTMLElement;

        constructor(args?: TermNewArgs);

        on(event: 'data', handler: (data: string) => void): void;

        open(element: Node, focus: boolean): void;

        fit(): void;

        focus(): void;

        write(text: string): void;

        reset(): void;
    }

    interface TermNewArgs {

    }
}
