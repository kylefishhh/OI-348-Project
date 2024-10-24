//This uses the same import list as Students.jsx because it was the file which ntried the most dfferent ways to make the features work as desired, thus it was easier thank typing all of them out every time.
import { Datagrid, DateField, List, TextField, Show, SimpleShowLayout, DateInput, Edit, ReferenceInput, SimpleForm, TextInput, Create, BooleanField, BooleanInput } from 'react-admin';

//Lists all the grade components in the grade table on the web app
export const GradeList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <DateField source="created" />
            <TextField source="gradeAverage" />
            <TextField source="mark" />
            <TextField source="moduleID" />
            <BooleanField source="pass" />
            <TextField source="studentID" />
            <TextField source="subMinimum" />
            <DateField source="updated" />
        </Datagrid>
    </List>
);

//shows all the grade components in the grade table on the web app
export const GradeShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <DateField source="created" />
            <TextField source="gradeAverage" />
            <TextField source="mark" />
            <TextField source="moduleID" />
            <BooleanField source="pass" />
            <TextField source="studentID" />
            <TextField source="subMinimum" />
            <DateField source="updated" />
        </SimpleShowLayout>
    </Show>
);

// edit all the grade components in the grade table on the web app
export const GradeEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <DateInput source="created" />
            <TextInput source="gradeAverage" />
            <TextInput source="mark" />
            <TextInput source="moduleID" />
            <BooleanInput source="pass" />
            <TextInput source="studentID" />
            <TextInput source="subMinimum" />
            <DateInput source="updated" />
        </SimpleForm>
    </Edit>
);

// creating a new grade
export const GradeCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="courseID" />
            <DateInput source="created" />
            <TextInput source="gradeAverage" />
            <TextInput source="mark" />
            <TextInput source="moduleID" />
            <BooleanInput source="pass" />
            <TextInput source="studentID" />
            <TextInput source="subMinimum" />
            <DateInput source="updated" />
        </SimpleForm>
    </Create>
);