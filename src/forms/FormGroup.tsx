import React, { Fragment } from 'react';
import {BaseFormGroup, FormUtils, Sections} from "@manojadams/metaforms-core";

export default class FormGroup extends BaseFormGroup {
    tabs(): JSX.Element {
        const tabVariant: any = FormUtils.getThemeProp('mui',this.context.theme,'variant');
        return (
            <Fragment></Fragment>
        )
    }
    panels(): JSX.Element {
        return (
        <Sections sections={this.sectionFields} 
            activeIndex={this.state.activeIndex}
            error={this.state.error}
        />
        )
    }

    handleChange(arg: any, index: number) {
        this.setActiveIndex(index);
    }
    
}