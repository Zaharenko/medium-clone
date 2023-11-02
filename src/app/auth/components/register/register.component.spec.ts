import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule, FormsModule, FormBuilder } from "@angular/forms";
import { Store, StoreModule } from "@ngrx/store";
import { RegisterComponent } from "./register.component";

describe("RegisterComponent", () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [ReactiveFormsModule, FormsModule, StoreModule.forRoot({})],
      providers: [FormBuilder],
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it("should initialize the form in ngOnInit", () => {
    component.ngOnInit();
    expect(component.form).toBeDefined();
  });

  it("should initialize the form", () => {
    component.initForm();
    expect(component.form.get("username").value).toBe("");
    expect(component.form.get("email").value).toBe("");
    expect(component.form.get("password").value).toBe("");
  });

  it("should dispatch register action on submit", () => {
    const formValue = {
      user: {
        username: "testUser",
        email: "test@test.com",
        password: "password123",
      },
    };

    component.form.setValue(formValue.user);

    spyOn(store, "dispatch");

    component.onSubmit();

    expect(store.dispatch).toHaveBeenCalled();
  });
});
