//Import necessary components from different libraries
import { Admin, Resource, nanoLightTheme, nanoDarkTheme, ListGuesser, ShowGuesser, EditGuesser } from "react-admin";
import { PocketBaseProvider } from "./ra-pocketbase";
// Import CRUD components for each resource/entity in the system
// Each resource typically has List, Show, Edit, and Create components
import { AdministratorList, AdministratorShow, AdministratorEdit, AdministratorCreate } from "./Administrators";
import { LecturerList, LecturerShow, LecturerEdit, LecturerCreate } from "./Lecturers";
import { SystemadministratorCreate, SystemadministratorEdit, SystemadministratorList, SystemadministratorShow } from "./SystemAdministrators";
import { ModuleparticipantList, ModuleparticipantShow, ModuleparticipantEdit, ModuleparticipantsCreate} from "./ModuleParticipants";
import { StudentList, StudentShow,StudentEdit, StudentCreate } from "./Students";
import { ModuleList, ModuleShow, ModuleEdit, ModuleCreate } from "./Module";
import { UserCreate, UserEdit, UserList, UserShow } from "./User";
import { CourseList, CourseEdit, CourseShow, CourseCreate } from "./Courses";
import { GradeList, GradeShow, GradeEdit, GradeCreate } from "./Grades";
import { BursaryapplicationList, BursaryapplicationShow, BursaryapplicationEdit, BursaryapplicationCreate} from "./BursaryApplication";
import { StudentaccountCreate, StudentaccountEdit, StudentaccountList, StudentaccountShow } from "./StudentAccount";
import { DepartmentCreate, DepartmentEdit, DepartmentList, DepartmentShow } from "./Departments";
import { ApplicationgeneralCreate, ApplicationgeneralEdit, ApplicationgeneralList, ApplicationgeneralShow } from "./ApplicationGeneral";
import { AcademicapplicationCreate, AcademicapplicationEdit, AcademicapplicationList, AcademicapplicationShow } from "./AcademicApplication";
import { BankingEdit, BankingList, BankingShow, BankingCreate} from "./Banking";
import { LoginPage } from "./LoginPage";

// The Pocketbase server used in this project
const pbProvider = PocketBaseProvider("https://vigilant-space-xylophone-wrggr59g694c5j9r-8090.app.github.dev/"); 

// Main App component that configures the React Admin application
const App = () => (
  <Admin 
    // Configure data provider for handling API requests
    dataProvider={pbProvider.dataProvider} 
    // Configure authentication provider
    authProvider={pbProvider.authProvider} 
    lightTheme={nanoLightTheme} 
    darkTheme={nanoDarkTheme} 
    // Custom login page component
    loginPage={LoginPage}
    >
      
//  Define all available resources in the system 
    <Resource
      name="Administrators"
      list={AdministratorList}
      show={AdministratorShow}
      edit={AdministratorEdit}
      create={AdministratorCreate}
    />

    <Resource
      name="Lecturers"
      list={LecturerList}
      show={LecturerShow}
      edit={LecturerEdit}
      create={LecturerCreate}
    />

    <Resource
      name="SystemAdministrators"
      list={SystemadministratorList}
      show={SystemadministratorShow}
      edit={SystemadministratorEdit}
      create={SystemadministratorCreate}
    />

    <Resource
      name="Departments"
      list={DepartmentList}
      show={DepartmentShow}
      edit={DepartmentEdit}
      create={DepartmentCreate}
    />

    <Resource
      name="ApplicationGeneral"
      list={ApplicationgeneralList}
      show={ApplicationgeneralShow}
      edit={ApplicationgeneralEdit}
      create={ApplicationgeneralCreate}
    />

    <Resource
      name="ModuleParticipants"
      list={ModuleparticipantList}
      show={ModuleparticipantShow}
      edit={ModuleparticipantEdit}
      create={ModuleparticipantsCreate}
    />

    <Resource
      name="Students"
      list={StudentList}
      show={StudentShow}
      edit={StudentEdit}
      create={StudentCreate}
    />

    <Resource
      name="Module"
      list={ModuleList}
      show={ModuleShow}
      edit={ModuleEdit}
      create={ModuleCreate}
    />

    <Resource
      name="users"
      list={UserList}
      show={UserShow}
      edit={UserEdit}
      create={UserCreate}
    />

    <Resource
      name="BursaryApplication"
      list={BursaryapplicationList}
      show={BursaryapplicationShow}
      edit={BursaryapplicationEdit}
      create={BursaryapplicationCreate}
    />

    <Resource
      name="AcademicApplication"
      list={AcademicapplicationList}
      show={AcademicapplicationShow}
      edit={AcademicapplicationEdit}
      create={AcademicapplicationCreate}
    />

    <Resource
      name="Courses"
      list={CourseList}
      show={CourseShow}
      edit={CourseEdit}
      create={CourseCreate}
    />

    <Resource
      name="Grades"
      list={GradeList}
      show={GradeShow}
      edit={GradeEdit}
      create={GradeCreate}
    />

    <Resource
      name="StudentAccount"
      list={StudentaccountList}
      show={StudentaccountShow}
      edit={StudentaccountEdit}
      create={StudentaccountCreate}
    />

    <Resource name="Banking" 
    list={BankingList} 
    show = {BankingShow}
    edit = {BankingEdit}
    create = {BankingCreate}
    />

  </Admin>
);

export default App;
