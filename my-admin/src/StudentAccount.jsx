//Import necessary components from react-admin library
import { Datagrid, DateField, List, TextField, NumberField, Show, SimpleShowLayout, DateInput, Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';

//Displays all student accounts in a table format
export const StudentaccountList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="studentID" />
            <NumberField source="totalRands" /> 
            <DateField source="payByDate" />
            <DateField source="created" />
            <DateField source="updated" />
        </Datagrid>
    </List>
);

//Displays detailed information for a single student account
export const StudentaccountShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="studentID" />
            <NumberField source="totalRands" />
            <DateField source="payByDate" />
            <DateField source="created" />
            <DateField source="updated" />
        </SimpleShowLayout>
    </Show>
);

//Provides a form to edit existing student accounts
export const StudentaccountEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="studentID" />
            <NumberInput source="totalRands" />
            <DateInput source="payByDate" />
            <DateInput source="created" />
            <DateInput source="updated" />
        </SimpleForm>
    </Edit>
);

//Provides a form to create new student accounts
export const StudentaccountCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="studentID" />
            <NumberInput source="totalRands" />
            <DateInput source="payByDate" />
            <DateInput source="created" />
            <DateInput source="updated" />
        </SimpleForm>
    </Create>
);