import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailReaderList } from './email-reader-list';

describe('EmailReaderList', () => {
  let component: EmailReaderList;
  let fixture: ComponentFixture<EmailReaderList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailReaderList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailReaderList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
