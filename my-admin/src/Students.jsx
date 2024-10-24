//Import necessary components from react-admin library
import { Datagrid, Create, DateField, List, NumberField, ReferenceField, TextField, Show, SimpleShowLayout,  DateInput, Edit, NumberInput, ReferenceInput, SimpleForm, TextInput, TabbedShowLayout, Tab, useRecordContext,useGetOne, useGetList, ReferenceArrayField, SingleFieldList, ChipField, ReferenceManyField} from 'react-admin';


export const StudentList = () => (
    <List>
        <Datagrid>
            <ReferenceArrayField reference = "Module" source = "moduleStudent" label = "Modules">
                <SingleFieldList>
                    <ChipField source="moduleName" />
                </SingleFieldList>
            </ReferenceArrayField>
            <TextField source="id" />
            <TextField source="userID" />
            <NumberField source="currentYear" />
            <NumberField source="matricAverage" />
            <TextField source="courseID" />
            <DateField source="created" />
            <DateField source="updated" />
        </Datagrid>
    </List>
);


//the tab in this code below creates a tab for profile and modules in the students show of the students collection.
//this allows the user to see their relevant modules and course and also look at these modules ansd their overarching course when they want to
//the chipfield here makes the modules appear as chips or bubbles with the name of the chip being the module name instead of the moduleID which is how they are referenced from the moduleStudent column in students
export const StudentShow = () => (
    <Show>
      <TabbedShowLayout>
        <Tab label="Profile">
          <TextField source="id" label="Student ID" />
          <TextField source="userID" label="User ID" />
          <NumberField source="currentYear" label="Current Year" />
          <NumberField source="matricAverage" label="Matric Average" />
        </Tab>
        <Tab label="Modules">
            <ReferenceArrayField reference = "Module" source = "moduleStudent" label = "Modules"> 
                <SingleFieldList>
                    <ChipField source="moduleName" />
                </SingleFieldList>
            </ReferenceArrayField>
            <ReferenceField source = "courseID" reference = "Courses" label = "Course Names">
                <TextField source = "courseName"/>
            </ReferenceField>
          <TextField source="courseID" label="Course ID" />
          <DateField source="updated" label="Last Updated" />
        </Tab>
      </TabbedShowLayout>
    </Show>
  );

//student Edit Component - to edit any students - only authorised users can do this as a student can delete or update themselves unilaterally
export const StudentEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="userID" />
            <NumberInput source="currentYear" />
            <NumberInput source="matricAverage" />
            <TextInput source="courseID" />
            <DateInput source="created" />
            <DateInput source="updated" />
        </SimpleForm>
    </Edit>
);

//student Create component -  any students - only authorised users can do this as a student can delete or update themselves unilaterally
export const StudentCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="userID" />
            <NumberInput source="currentYear" />
            <NumberInput source="matricAverage" />
            <TextInput source="courseID" />
            <DateInput source="created" />
            <DateInput source="updated" />
        </SimpleForm>
    </Create>
);

//an initial more complex attempt to get the tabs and overall student view feature to be present in the student show tab (it failed)

//-------------------------------------------------------------------------------------------------//
// import { 
//     Datagrid, 
//     DateField, 
//     List, 
//     NumberField, 
//     ReferenceField, 
//     TextField, 
//     Show, 
//     SimpleShowLayout,
//     DateInput, 
//     Edit, 
//     NumberInput, 
//     ReferenceInput, 
//     SimpleForm, 
//     TextInput, 
//     TabbedShowLayout, 
//     Tab, 
//     useRecordContext,
//     useGetMany,
//     ReferenceManyField,
//     SelectInput,
//     useGetList
// } from 'react-admin';

// // Custom field to display user information based on username
// const UserField = () => {
//     const record = useRecordContext();
//     const { data: users } = useGetList('users', {
//         filter: { username: record.userID }
//     });
    
//     if (!users || !users[0]) return null;
//     return <span>{users[0].name}</span>;
// };

// export const StudentList = () => (
//     <List>
//         <Datagrid rowClick="show">
//             <TextField source="id" />
//             <TextField source="userID" label="Username" />
//             <UserField label="Student Name" />
//             <NumberField source="currentYear" />
//             <NumberField source="matricAverage" />
//             <ReferenceField 
//                 source="courseID" 
//                 reference="Courses"
//                 link={false}
//             >
//                 <TextField source="courseName" />
//             </ReferenceField>
//             <DateField source="created" />
//             <DateField source="updated" />
//         </Datagrid>
//     </List>
// );

// const ModulesTab = () => {
//     const record = useRecordContext();
//     return (
//         <ReferenceManyField
//             reference="Module"
//             target="courseID"
//             filter={{ courseID: record.courseID }}
//         >
//             <Datagrid>
//                 <TextField source="moduleCode" />
//                 <TextField source="moduleName" />
//                 <TextField source="moduleDescription" />
//                 <NumberField source="credits" />
//                 <DateField source="updated" />
//             </Datagrid>
//         </ReferenceManyField>
//     );
// };

// const GradesTab = () => {
//     const record = useRecordContext();
//     return (
//         <ReferenceManyField
//             reference="Grades"
//             target="userID"  // This should match your Grades collection field
//             filter={{ userID: record.userID }}  // Filtering by username
//         >
//             <Datagrid>
//                 <ReferenceField 
//                     source="moduleID" 
//                     reference="Module"
//                     link={false}
//                 >
//                     <TextField source="moduleName" />
//                 </ReferenceField>
//                 <NumberField source="grade" />
//                 <NumberField source="year" />
//             </Datagrid>
//         </ReferenceManyField>
//     );
// };

// export const StudentShow = () => (
//     <Show>
//         <TabbedShowLayout>
//             <Tab label="Profile">
//                 <TextField source="id" label="Student ID" />
//                 <TextField source="userID" label="Username" />
//                 <UserField label="Student Name" />
//                 <NumberField source="currentYear" label="Current Year" />
//                 <NumberField source="matricAverage" label="Matric Average" />
//                 <ReferenceField 
//                     source="courseID" 
//                     reference="Courses"
//                     label="Course"
//                     link={false}
//                 >
//                     <TextField source="courseName" />
//                 </ReferenceField>
//             </Tab>
//             <Tab label="Modules">
//                 <ModulesTab />
//             </Tab>
//             <Tab label="Grades">
//                 <GradesTab />
//             </Tab>
//         </TabbedShowLayout>
//     </Show>
// );

// export const StudentEdit = () => {
//     const { data: users } = useGetList('users');
    
//     return (
//         <Edit>
//             <SimpleForm>
//                 <TextInput source="id" disabled />
//                 <SelectInput 
//                     source="userID"
//                     choices={users}
//                     optionText="username"
//                     optionValue="username"
//                 />
//                 <NumberInput source="currentYear" />
//                 <NumberInput source="matricAverage" />
//                 <ReferenceInput 
//                     source="courseID" 
//                     reference="Courses"
//                 >
//                     <SelectInput optionText="courseName" />
//                 </ReferenceInput>
//             </SimpleForm>
//         </Edit>
//     );
// };

// export const StudentCreate = () => {
//     const { data: users } = useGetList('users');
    
//     return (
//         <Create>
//             <SimpleForm>
//                 <SelectInput 
//                     source="userID"
//                     choices={users}
//                     optionText="username"
//                     optionValue="username"
//                 />
//                 <NumberInput source="currentYear" />
//                 <NumberInput source="matricAverage" />
//                 <ReferenceInput 
//                     source="courseID" 
//                     reference="Courses"
//                 >
//                     <SelectInput optionText="courseName" />
//                 </ReferenceInput>
//             </SimpleForm>
//         </Create>
//     );
// };
//--------------------------------------------------------------------------------- Iteration 3.0 CL to get the studetn view working.
