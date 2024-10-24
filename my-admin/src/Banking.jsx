import { Datagrid, DateField, List, ReferenceField, TextField, Show, SimpleShowLayout, DateInput, Edit, ReferenceInput, SimpleForm, TextInput, Create} from 'react-admin';
//listing all the relevant banking information from the collection banking 
export const BankingList = () => (
    <List>
        <Datagrid>
            <TextField source="accountType" />
            <TextField source="amountToPay" />
            <TextField source="bankingDetails" />
            <DateField source="created" />
            <TextField source="id" />
            <TextField source="proofOfPayment" />
            <DateField source="updated" />
            <TextField source = "bankingID" />
        </Datagrid>
    </List>
);
//showing all the relevant banking information from the collection banking - includes an bankingID field to reference the userID in the user collection so only those logged in with their userId can edit or view or show the banking feature for privacy and security
export const BankingShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="accountType" />
            <TextField source="amountToPay" />
            <TextField source="bankingDetails" />
            <DateField source="created" />
            <TextField source="id" />
            <TextField source="proofOfPayment" />
            <DateField source="updated" />
            <TextField source = "bankingID" />
        </SimpleShowLayout>
    </Show>
);
// edit section of CRUD for all the relevant banking information from the collection banking 
export const BankingEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="accountType" />
            <TextInput source="amountToPay" />
            <TextInput source="bankingDetails" />
            <DateInput source="created" />
            <TextInput source="id" />
            <TextField source="proofOfPayment" />
            <DateInput source="updated" />
            <TextField source = "bankingID" />
        </SimpleForm>
    </Edit>
);
// create section of CRUD for all the relevant banking information from the collection banking - allows all types of users to pay on the babnking app (ie manage student account), so that even prospective students can pay for their applications etc 

export const BankingCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="accountType" />
            <TextInput source="amountToPay" />
            <TextInput source="bankingDetails" />
            <DateInput source="created" />
            <TextInput source="proofOfPayment" />
            <DateInput source="updated" />
            <TextField source = "bankingID" />
        </SimpleForm>
    </Create>
);