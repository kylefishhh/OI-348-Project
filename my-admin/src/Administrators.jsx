//Import necessary components from react-admin library
import { Datagrid, DateField, List, ReferenceField, TextField, Show, SimpleShowLayout, DateInput, Edit, SimpleForm, TextInput } from 'react-admin';

//Define the AdministratorList component for displaying a list of administrators
export const AdministratorList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="userID" />
            <TextField source="adminRole" />
            <TextField source="accessLevel" />
            <TextField source="positionInDepartment" />
            <DateField source="created" />
            <DateField source="updated" />
        </Datagrid>
    </List>
);

//Define the AdministratorShow component for displaying details of a single administrator

export const AdministratorShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="userID" />
            <TextField source="adminRole" />
            <TextField source="accessLevel" />
            <TextField source="positionInDepartment" />
            <DateField source="created" />
            <DateField source="updated" />
        </SimpleShowLayout>
    </Show>
);

//Define the AdministratorEdit component for editing an existing administrator
export const AdministratorEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="userID" />
            <TextInput source="adminRole" />
            <TextInput source="accessLevel" />
            <TextInput source="positionInDepartment" />
            <DateInput source="created" />
            <DateInput source="updated" />
        </SimpleForm>
    </Edit>
);

// Define the AdministratorCreate component for creating a new administrator
export const AdministratorCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="userID" />
            <TextInput source="adminRole" />
            <TextInput source="accessLevel" />
            <TextInput source="positionInDepartment" />
            <DateInput source="created" />
            <DateInput source="updated" />
        </SimpleForm>
    </Create>
);