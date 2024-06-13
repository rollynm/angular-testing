import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service';
import { of } from 'rxjs';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userService: UserService;
  let userServiceSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [UserService],
    }).compileComponents();
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;

    userService = TestBed.inject(UserService);
    userServiceSpy = spyOn(userService, 'getUsers').and.returnValue(
      of([
        { id: 1, name: 'acidrain' },
        { id: 2, name: 'Iceman' },
      ])
    );
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should retrieve users on init', () => {
    fixture.detectChanges();
    expect(userServiceSpy).toHaveBeenCalled();
  });
  it('should retrieve user when button is click', () => {
    fixture.detectChanges();
    userServiceSpy.calls.reset();
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    expect(userServiceSpy).toHaveBeenCalled();
  });
});
