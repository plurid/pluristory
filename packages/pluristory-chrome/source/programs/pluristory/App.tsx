import React from 'react';
import themes from '@plurid/plurid-themes';

import Context from './context';

import Pluristory from './Pluristory';

import {
    chromeStorage,
} from '../../services/utilities';



class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            theme: themes.depict,
            setTheme: this.setTheme,
        };
    }

    async componentDidMount() {
        const { theme } = await chromeStorage.get('theme');

        const selectedTheme = (themes as any)[theme];

        if (theme) {
            this.setState({
                theme: selectedTheme,
            });
        }
    }

    public render() {
        return (
            <Context.Provider value={this.state}>
                <Pluristory />
            </Context.Provider>
        );
    }

    private setTheme = async (theme: string) => {
        this.setState({
            theme: (themes as any)[theme],
        });

        await chromeStorage.set({theme});
    }
}


export default App;
