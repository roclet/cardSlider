import { SourcedSubscription } from '../model/baseModels';
import { Subscription } from 'rxjs';
import { Injectable } from '@angular/core';
import { remove } from 'src/app/features/shared/helper/util-helper-array';

@Injectable({ providedIn: 'root' })
export class SubscriptionService {
  private generalSubscriptions: Subscription[] = [];
  private subscriptions: SourcedSubscription[] = [];

  constructor() {}

  get length() {
    return this.generalSubscriptions.length;
  }

  get items() {
    return this.generalSubscriptions.slice();
  }

  add(source: any, ...subscriptions: Subscription[]) {
    const existing = this.subscriptions.find((item) => item.source === source);

    if (existing)
      existing.subscriptions = existing.subscriptions.concat(subscriptions);
    else this.subscriptions.push({ source, subscriptions });
  }

  unsubscribe(source: any) {
    const existing = this.subscriptions.find((item) => item.source === source);

    if (existing) {
      existing.subscriptions.forEach((subscription) =>
        subscription.unsubscribe()
      );
      remove(existing, this.subscriptions);
    }
  }

  addShared(...subscriptions: Subscription[]) {
    this.generalSubscriptions.push(...subscriptions);
  }

  unsubscribeShared(): void {
    this.generalSubscriptions.forEach((subscription) =>
      subscription.unsubscribe()
    );
    this.generalSubscriptions = [];
  }
}
