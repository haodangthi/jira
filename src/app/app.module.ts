import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoardComponent } from './board/board.component';
import { TaskComponent } from './task/task.component';
import { MenuComponent } from './menu/menu.component';
import { FilterComponent } from './filter/filter.component';
import { TaskPageComponent } from './task-page/task-page.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateTaskComponent } from './create-task/create-task.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
const materialModules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatExpansionModule,
  MatListModule,
  MatDialogModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatProgressSpinnerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatChipsModule,
  MatToolbarModule,
  LayoutModule,
  MatButtonModule,
  MatSidenavModule,
];
const firebaseConfig = {
  apiKey: 'AIzaSyAkfCPYJnCB-J2s0CCdOo42kYCiotv-cmg',
  authDomain: 'jira-a070e.firebaseapp.com',
  databaseURL: 'https://jira-a070e.firebaseio.com',
  projectId: 'jira-a070e',
  storageBucket: 'jira-a070e.appspot.com',
  messagingSenderId: '592525989771',
  appId: '1:592525989771:web:83f2e2dddeb9616914818e',
  measurementId: 'G-C137SD5TBB',
};
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BoardComponent,
    TaskComponent,
    MenuComponent,
    FilterComponent,
    TaskPageComponent,
    AuthComponent,
    LoginComponent,
    SignInComponent,
    CreateTaskComponent,
    HomeComponent,
  ],
  entryComponents: [CreateTaskComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ...materialModules,
    DragDropModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [AngularFireAuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
