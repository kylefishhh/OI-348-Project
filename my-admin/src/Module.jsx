//Import necessary components from react-admin library
import { Datagrid, DateField, List, ReferenceField, TextField, Show, SimpleShowLayout, DateInput, Edit, ReferenceInput, ReferenceArrayField, SimpleForm, TextInput, Create} from 'react-admin';

// Commented out filter implementation for possible future use
// const postFilters = [
//     <TextInput source="q" label="Search" alwaysOn />,
//     <ReferenceInput source="Id" label="<Modules>" reference="Modules" />,
// ];

//Define the ModuleList component for displaying a list of modules
export const ModuleList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="moduleName" />
            <TextField source="lecturerID" />
            <TextField source="moduleConvenerID" />
            <TextField source="courseID" />
            <TextField source="average" /> 
            <TextField source="credits" />
            <DateField source="created" />
            <DateField source="updated" />
        </Datagrid>
    </List>
);

//Define the ModuleShow component for displaying details of a single module
export const ModuleShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="moduleName" />
            <TextField source="lecturerID" />
            <TextField source="moduleConvenerID" />
            <TextField source="courseID" />
            <TextField source="average" /> 
            <TextField source="credits" />
            <DateField source="created" />
            <DateField source="updated" />
        </SimpleShowLayout>
    </Show>
);

//Define the ModuleEdit component for editing an existing module
export const ModuleEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="moduleName" />
            <TextInput source="lecturerID" />
            <TextInput source="moduleConvenerID" />
            <TextInput source="courseID" />
            <TextInput source="average" />
            <TextInput source="credits" />
            <DateInput source="created" />
            <DateInput source="updated" />
        </SimpleForm>
    </Edit>
);

//Define the ModuleCreate component for creating a new module
export const ModuleCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="moduleName" />
            <TextInput source="lecturerID" />
            <TextInput source="moduleConvenerID" />
            <TextInput source="departmentID" />
            <TextInput source="average" />
            <TextInput source="credits" />
            <DateInput source="created" />
            <DateInput source="updated" />
        </SimpleForm>
    </Create>
);