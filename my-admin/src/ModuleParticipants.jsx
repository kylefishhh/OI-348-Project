//Import necessary components from react-admin library
import { Datagrid, DateField, List, ReferenceField, TextField, Show, SimpleShowLayout, DateInput, Edit, ReferenceInput, SimpleForm, TextInput, Create} from 'react-admin';

//Imports are all listed at the top, as we were having duplication errors, and havin them all in one line helps with preventing this issue

// Displays all module enrollments in a table format
export const ModuleparticipantList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <DateField source="created" />
            <TextField source="lecturerID" />
            <TextField source="moduleID" />
            <TextField source="studentID" />
            <DateField source="updated" />
            <DateField source="yearEnrolled" />
        </Datagrid>
    </List>
);
//the section above, all the way top the bottom facilitates all the CRUD operations required for each of the 
//classes we have outlined in the BRD and which we have created in PocketBase.

//  Displays detailed information for a single enrollment
export const ModuleparticipantShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <DateField source="created" />
            <TextField source="lecturerID" />
            <TextField source="moduleID" />
            <TextField source="studentID" />
            <DateField source="updated" />
            <DateField source="yearEnrolled" />
        </SimpleShowLayout>
    </Show>
);

//Provides a form to edit existing enrollments
export const ModuleparticipantEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <DateInput source="created" />
            <TextInput source="lecturerID" />
            <TextInput source="moduleID" />
            <TextInput source="studentID" />
            <DateInput source="updated" />
            <DateInput source="yearEnrolled" />
        </SimpleForm>
    </Edit>
);
//Provides a form to create new enrollments
export const ModuleparticipantsCreate = () => (
    <Create>
        <SimpleForm>
            <DateInput source="created" />
            <TextInput source="lecturerID" />
            <TextInput source="moduleID" />
            <TextInput source="studentID" />
            <DateInput source="updated" />
            <DateInput source="yearEnrolled" />
        </SimpleForm>
    </Create>
);
