// Import necessary components from react-admin library for building admin interfaces
import { Create, 
    Datagrid, 
    DateField, 
    EmailField, 
    List, 
    ReferenceField, 
    TextField, 
    DateInput, 
    Edit, 
    ReferenceInput, 
    SimpleForm, 
    TextInput, 
    Show, SimpleShowLayout, SelectInput, required, PasswordInput 
} from 'react-admin';

// UserList component - Displays a list of users in a table format
export const UserList = () => (
    <List>
        <Datagrid>
            <TextField source="id" /> 
            <TextField source="firstName" />
            <TextField source="lastName" />
            <TextField source="userName" />
            <TextField source="userRole" />
            <EmailField source="email" />
            <TextField source="phoneNumber" />
            <DateField source="dateOfBirth" />
            <DateField source="created" />
            <DateField source="updated" />
        </Datagrid>
    </List>
);

// User Show component 
export const UserShow = () => (
    <Show>

        <SimpleShowLayout>

            <TextField source="id" />
            <TextField source="firstName" />
            <TextField source="lastName" />
            <TextField source="userName" />
            <TextField source="userRole" />
            <EmailField source="email" />
            <TextField source="phoneNumber" />
            <DateField source="dateOfBirth" />
            <DateField source="created" />
            <DateField source="updated" />
        </SimpleShowLayout>
    </Show>
);

//edit existing user data
export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <TextInput source="userName" />
            <TextInput source="userRole" />
            <TextInput source="email" />
            <TextInput source="phoneNumber" />
            <DateInput source="dateOfBirth" />
            <DateInput source="created" />
            <DateInput source="updated" />
        </SimpleForm>
    </Edit>
);

//create new users
export const UserCreate = () => (
    <Create disableAuthentication>
        <SimpleForm>
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <TextInput source="userName" />
            <SelectInput source = "Role" choices={[
                { id : 'admin' , name: 'Admin'},
                { id : 'students' , name: 'Student'},
                { id : 'prospectiveStudent' , name: 'Prospective Student'},
                { id : 'lecturer' , name: 'Lecturer'}]}/> 
            <TextInput source="email" type ='email' validate={required()}/>
            <TextInput source="password" type = 'password' validate={required()}/>
            <TextInput source="passwordConfirm" type = 'password' validate={required()}/>
            <TextInput source="phoneNumber" />
            <DateInput source="dateOfBirth" />
            <DateInput source="created" />
            <DateInput source="updated" />
        </SimpleForm>
    </Create>
);


