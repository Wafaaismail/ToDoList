
import _ from 'lodash'
//  import fields from './fields'
// import TextboxField from './TextboxField'
// import TextArea from './TextArea'
// import CheckboxFields from './CheckboxFields'
// import SelectField from './SelectField'
import React from 'react';
import MidComp from '../MidComp'
export const renderFields = (fields) => {
	//console.log(fields)
	return (<MidComp fields={fields} />)
	// switch (field.name) {
	// 	case 'title':
	// 		return <TextboxField name={field.name} type={field.type} />

	// 	case 'description':
	// 		return <TextArea name={field.name} type={field.type} />

	// 	case 'done':
	// 		return <CheckboxFields name={field.name} type={field.type} />

	// 	case 'users':
	// 		return <SelectField name={field.name} type={field.type} />

	// 	default:
	// 		//console.log ('error uncaughted field')
	// 		break;
	// }

}