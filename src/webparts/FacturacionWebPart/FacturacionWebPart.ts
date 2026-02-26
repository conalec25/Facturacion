import { BaseWebPart, IWebPartContext } from '@microsoft/sp-webpart-base';

export default class FacturacionWebPart extends BaseWebPart<IWebPartContext> {
    protected get dataVersion(): Version {
        return Version.parse('1.0');
    }

    protected get title(): string {
        return 'Facturación Web Part';
    }

    public render(): void {
        this.domElement.innerHTML = `<div>${this.title}</div>`;
    }
}