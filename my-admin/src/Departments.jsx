//Import necessary components from react-admin library
import { Datagrid, DateField, List, TextField, Show, SimpleShowLayout, DateInput, Edit, SimpleForm, TextInput, Create } from 'react-admin';
//Displays all departments in a table format
export const DepartmentList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="departmentName" />
            <TextField source="departmentHeadID" />
            <DateField source="created" />
            <DateField source="updated" />
        </Datagrid>
    </List>
);
//isplays detailed information for a single department
export const DepartmentShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="departmentName" />
            <TextField source="departmentHeadID" />
            <DateField source="created" />
            <DateField source="updated" />
        </SimpleShowLayout>
    </Show>
);
//Provides a form to edit existing department details
export const DepartmentEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="departmentName" />
            <TextInput source="departmentHeadID" />
            <DateInput source="created" />
            <DateInput source="updated" />
        </SimpleForm>
    </Edit>
);
//Provides a form to create new departments
export const DepartmentCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="departmentName" />
            <TextInput source="departmentHeadID" />
            <DateInput source="created" />
            <DateInput source="updated" />
        </SimpleForm>
    </Create>
);