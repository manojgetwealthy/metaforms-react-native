import React, { Fragment } from 'react';
import {BaseFormGroup} from "@manojadams/metaforms-core";
import Sections from "@manojadams/metaforms-core/dist/core/form-group/common/Sections";
import FormUtils from '@manojadams/metaforms-core/dist/utils/FormUtil';
import { IField } from '@manojadams/metaforms-core/dist/constants/model-interfaces';

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