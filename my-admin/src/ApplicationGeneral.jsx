//Import necessary components from react-admin library
import { Datagrid, DateField, List, TextField, Show, SimpleShowLayout, DateInput, Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

//This is to create the list functionality for the general application collection. 
export const ApplicationgeneralList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="applicantID" />
            <TextField source="applicationType" />
            <TextField source="applicationName" />
            <DateField source="applicationDate" />
            <DateField source="created" />
            <DateField source="updated" />
        </Datagrid>
    </List>
);
//This is to create the show functionality for the general application collection.
export const ApplicationgeneralShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="applicantID" />
            <TextField source="applicationType" />
            <TextField source="applicationName" />
            <DateField source="applicationDate" />
            <DateField source="created" />
            <DateField source="updated" />
        </SimpleShowLayout>
    </Show>
);
//This is to create the edit functionality for the general application collection.
export const ApplicationgeneralEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="applicantID" />
            <TextInput source="applicationType" />
            <TextInput source="applicationName" />
            <DateInput source="applicationDate" />
            <DateInput source="created" />
            <DateInput source="updated" />
        </SimpleForm>
    </Edit>
);
//This is to create the Create functionality for the general application collection.
export const ApplicationgeneralCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="applicantID" />
            <TextInput source="applicationType" />
            <TextInput source="applicationName" />
            <DateInput source="applicationDate" />
            <DateInput source="created" />
            <DateInput source="updated" />
        </SimpleForm>
    </Create>
);