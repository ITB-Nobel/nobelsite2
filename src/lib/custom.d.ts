declare global {
    interface Window {
        google: {
            translate: {
                TranslateElement: {
                    new (container: string | HTMLElement, options: {
                        pageLanguage: string,
                        includedLanguages: string,
                        layout: number,
                        autoDisplay: boolean,
                    }): any;
                };
            };
        };
        googleTranslateElementInit:any
    }
}
