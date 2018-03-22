import { Component, OnInit } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';

import { ActionsService, TodoDataService, Section, UtilsService } from '../../core/core.module';
import { TasksComponent } from './tasks/tasks.module';
import { SectionEditComponent } from './section-edit/section-edit.component';

@Component({
  selector: 'sections',
  templateUrl: 'sections.component.html',
})
export class SectionsComponent implements OnInit {
  sections: Section[];

  constructor(protected navCtrl: NavController,
              protected modalCtrl: ModalController,
              protected todoDataService: TodoDataService,
              protected utils: UtilsService,
              protected actions: ActionsService,
              protected translate: TranslateService) {
  }

  ngOnInit(): void {
    this.sections = [];
  }

  ionViewWillEnter(): void {
    this.todoDataService.getSections()
      .then((sections: Section[]) => {
        this.sections = sections;
      });
  }

  getSectionIcon(section: Section): string {
    return this.utils.getIconForSectionType(section.type);
  }

  getSectionTypeDesc(section: Section): any {
    return this.utils.getTranslateKeyForSectionType(section.type);
  }

  addSection(): void {
    let newSection = new Section(this.utils.createUUID(), this.utils.getDate(), '', '');

    let sectionEditModal = this.modalCtrl.create(SectionEditComponent, { section: newSection });
    sectionEditModal.onDidDismiss((editSection) => {
      if (editSection) {
        this.todoDataService.insertUpdateSection(editSection)
          .then(() => {
            this.sections.splice(0, 0, editSection);

            this.translate.get('SECTIONS.ACTION_CRE_SEC', { value: editSection.description })
              .subscribe((res: string) => {
                this.actions.addAction(res);
              });
          });
      }
    });

    sectionEditModal.present();
  }

  delete(section: Section): void {
    this.todoDataService.deleteSection(section)
      .then(() => {
        this.sections = this.sections.filter((sec: Section) => {
          return section.id != sec.id;
        });

        this.translate.get('SECTIONS.ACTION_DEL_SEC', { value: section.description })
          .subscribe((res: string) => {
            this.actions.addAction(res);
          });
      });
  }

  modify(section: Section): void {
    const newSection = Object.assign({}, section);

    let taskEditModal = this.modalCtrl.create(SectionEditComponent, { section: newSection });
    taskEditModal.onDidDismiss((editSection) => {
      if (editSection) {
        this.todoDataService.insertUpdateSection(editSection)
          .then(() => {
            section = editSection;
            this.ionViewWillEnter();

            this.translate.get('SECTIONS.ACTION_MOD_SEC', { value: section.description })
              .subscribe((res: string) => {
                this.actions.addAction(res);
              });
          });
      }
    });

    taskEditModal.present();
  }

  goToSection(section: Section): void {
    this.navCtrl.push(TasksComponent, {
      section: section,
    });
  }
}
