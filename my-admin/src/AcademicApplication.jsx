import { Datagrid, DateField, List,  TextField, Show, SimpleShowLayout, DateInput, Edit, SimpleForm, TextInput } from 'react-admin';

export const AcademicapplicationList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="applicationID" />
            <TextField source="applicantID" />
            <TextField source="courseID" />
            <TextField source="yearOfApplication" />
            <DateField source="created" />
            <DateField source="updated" />
        </Datagrid>
    </List>
);

export const AcademicapplicationShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="applicationID" />
            <TextField source="applicantID" />
            <TextField source="courseID" />
            <TextField source="yearOfApplication" />
            <DateField source="created" />
            <DateField source="updated" />
        </SimpleShowLayout>
    </Show>
);

export const AcademicapplicationEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="applicationID" />
            <TextInput source="applicantID" />
            <TextInput source="courseID" />
            <TextInput source="yearOfApplication" />
            <DateInput source="created" />
            <DateInput source="updated" />
        </SimpleForm>
    </Edit>
);

export const AcademicapplicationCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="applicationID" />
            <TextInput source="applicantID" />
            <TextInput source="courseID" />
            <TextInput source="yearOfApplication" />
            <DateInput source="created" />
            <DateInput source="updated" />
        </SimpleForm>
    </Create>
);