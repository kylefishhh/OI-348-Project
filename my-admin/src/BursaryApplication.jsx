//Import necessary components from react-admin library
import { Datagrid, DateField, List, ReferenceField, TextField, Show, SimpleShowLayout, DateInput, Edit, ReferenceInput, SimpleForm, TextInput, Create} from 'react-admin';

//This is to create the list functionality for the Bursary application collection. 
export const BursaryapplicationList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="amount" />
            <TextField source="bursaryApplicantID" />
            <TextField source = "bursaryDetails"/>
            <DateField source="created" />
            <DateField source="updated" />
        </Datagrid>
    </List>
);

//This is to create the show functionality for the Bursary application collection.
export const BursaryapplicationShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="amount" />
            <TextField source="bursaryApplicantID" />
            <DateField source="created" />
            <DateField source="updated" />
        </SimpleShowLayout>
    </Show>
);

//This is to create the edit functionality for the Bursary application collection
export const BursaryapplicationEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="amount" />
            <TextInput source="bursaryApplicantID" />
            <DateInput source="created" />
            <DateInput source="updated" />
        </SimpleForm>
    </Edit>
);

// Define the BursaryapplicationCreate component for creating a new application
export const BursaryapplicationCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="amount" />
            <TextInput source="bursaryApplicantID" />
            <DateInput source="created" />
            <DateInput source="updated" />
        </SimpleForm>
    </Create>
);