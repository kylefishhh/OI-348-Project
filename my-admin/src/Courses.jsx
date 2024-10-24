//Import necessary components from react-admin library
import { Datagrid, DateField, List, TextField, Show, SimpleShowLayout, DateInput, Edit, SimpleForm, TextInput } from 'react-admin';

// Displays a list of all courses in a table format
export const CourseList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="departmentID" />
            <TextField source="courseCode" />
            <TextField source="courseDescription" />
            <TextField source="courseName" />
            <DateField source="created" />
            <DateField source="updated" />
        </Datagrid>
    </List>
);

//Displays detailed information for a single course
export const CourseShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="departmentID" />
            <TextField source="courseCode" />
            <TextField source="courseDescription" />
            <TextField source="courseName" />
            <DateField source="created" />
            <DateField source="updated" />
        </SimpleShowLayout>
    </Show>
);
// edit existing course
export const CourseEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="departmentID" />
            <TextInput source="courseCode" />
            <TextInput source="courseDescription" />
            <TextInput source="courseName" />
            <DateInput source="created" />
            <DateInput source="updated" />
        </SimpleForm>
    </Edit>
);

//Provides a form to create new courses
export const CourseCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="departmentID" />
            <TextInput source="courseCode" />
            <TextInput source="courseDescription" />
            <TextInput source="courseName" />
            <DateInput source="created" />
            <DateInput source="updated" />
        </SimpleForm>
    </Create>
);