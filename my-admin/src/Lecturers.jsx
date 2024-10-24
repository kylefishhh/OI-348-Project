//Import necessary components from react-admin library
import { Datagrid, DateField, List, ReferenceField, TextField, Show, SimpleShowLayout, DateInput, Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const LecturerList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="adminID" />
            <TextField source="departmentID" />
            <TextField source="courseID" />
            <DateField source="created" />
            <DateField source="updated" />
        </Datagrid>
    </List>
);
// Displays all lecturers in a table format
export const LecturerShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="adminID" />
            <TextField source="departmentID" />
            <TextField source="courseID" />
            <DateField source="created" />
            <DateField source="updated" />
        </SimpleShowLayout>
    </Show>
);
//Displays detailed information for a single lecturer
export const LecturerEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="adminID" />
            <TextInput source="departmentID" />
            <TextField source="courseID" />
            <DateInput source="created" />
            <DateInput source="updated" />
        </SimpleForm>
    </Edit>
);
// Provides a form to edit existing lecturer details
export const LecturerCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="adminID" />
            <TextInput source="departmentID" />
            <TextField source="courseID" />
            <DateInput source="created" />
            <DateInput source="updated" />
        </SimpleForm>
    </Create>
);