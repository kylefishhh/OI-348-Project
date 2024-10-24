//Import necessary components from react-admin library
import { Datagrid, DateField, List, TextField, Show, SimpleShowLayout, DateInput, Edit, SimpleForm, TextInput } from 'react-admin';

//Displays all System administrators in a table format
export const SystemadministratorList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="adminID" />
            <TextField source="securityAccess" />
            <DateField source="created" />
            <DateField source="updated" />
        </Datagrid>
    </List>
);

//Displays detailed information for a single admin account
export const SystemadministratorShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="adminID" />
            <TextField source="securityAccess" />
            <DateField source="created" />
            <DateField source="updated" />
        </SimpleShowLayout>
    </Show>
);

//Provides a form to edit existing system admin
export const SystemadministratorEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="adminID" />
            <TextInput source="securityAccess" />
            <DateInput source="created" />
            <DateInput source="updated" />
        </SimpleForm>
    </Edit>
);

//Provides a form to create new system admin accounts
export const SystemadministratorCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="adminID" />
            <TextInput source="securityAccess" />
            <DateInput source="created" />
            <DateInput source="updated" />
        </SimpleForm>
    </Create>
);