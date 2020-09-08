import { Injectable } from '@angular/core';
import { BehaviorSubject, defer, of, Subject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MenuConfigService {

  leftMenu$ = new BehaviorSubject<any>(null);
  rightMenu$ = new BehaviorSubject<any>(null);

  emitLeftMenu(): void {
    this.leftMenu$.next({
      panels: [
        { title: 'Left Panel 1',
          config: {
            title: 'Content of left panel 1',
            mode: 'select'
          }
        },
        { title: 'Left Panel 2',
          config: {
            title: 'Content of left panel 2',
            mode: 'grid'
          }
        }
      ],
      config: false,
      help: true
    });
  }

  emitRightMenu(): void {
    this.rightMenu$.next({
      panels: [
        { title: 'Right Panel 1',
          config: {
            title: 'Content of right panel 1',
            mode: 'grid'
          }
        },
        { title: 'Right Panel 2',
          config: {
            title: 'Content of right panel 2',
            mode: 'select'
          }
        }
      ],
      config: true,
      help: false
    });
  }

  getMockHttpData(data: any) {
    return defer(() => of(data).pipe(delay(1000)));
  }
}
