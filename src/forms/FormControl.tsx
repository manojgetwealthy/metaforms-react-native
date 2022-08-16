import React, { Fragment } from 'react';
import {BaseFormControl} from '@manojadams/metaforms-core';
import { IRenderField } from '@manojadams/metaforms-core';
import { TextInput } from "react-native";

export default class FormControl extends BaseFormControl {
    variant: string;
    size: any;
    constructor(props: IRenderField){
        super(props);
        this.variant = 'standard';
    }
    render(): JSX.Element {
        const muiVariant = this.context.getThemeProp('mui','variant');
        const muiSize = this.context.getThemeProp('mui','size');
        this.variant = muiVariant ? muiVariant : 'standard';
        this.size = muiSize ? muiSize : undefined;
        return super.render();
    }
    month(): JSX.Element {
        throw new Error('Method not implemented.');
    }
    date(): JSX.Element {
        throw new Error('Method not implemented.');
    }
    search(): JSX.Element {
        throw new Error('Method not implemented.');
    }
    text() {
        const value = this.props.form?.value + '' || '';
        return (
            <TextInput
                onChange={this.handleChange.bind(this)}
                value={value}
          />
        )
    }
    label(): JSX.Element {
        throw new Error('Method not implemented.');
    }
    password(): JSX.Element {
        throw new Error('Method not implemented.');
    }
    email(): JSX.Element {
        throw new Error('Method not implemented.');
    }
    number(): JSX.Element {
        throw new Error('Method not implemented.');
    }
    radio(): JSX.Element {
        throw new Error('Method not implemented.');
    }
    checkbox(): JSX.Element {
        throw new Error('Method not implemented.');
    }
    select(): JSX.Element {
        throw new Error('Method not implemented.');
    }
    multiselect(): JSX.Element {
        throw new Error('Method not implemented.');
    }
    button(): JSX.Element {
        throw new Error('Method not implemented.');
    }
    getVariant() {
        return this.field.meta?.mui?.variant ? this.field.meta.mui.variant : this.variant;
        
    }
    getDisplayLabel() {
        return this.props.form.validation?.required ? this.props.form.displayName + ' *' : this.props.form.displayName;
    }
    
}