<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet />

      <ion-tab-bar slot="bottom">
        <ion-tab-button
          tab="explore"
          href="/education/courses"
        >
          <ion-icon
            aria-hidden="true"
            :icon="searchOutline"
          />
          <ion-label>{{ $t('courses') }}</ion-label>
        </ion-tab-button>

        <ion-tab-button
          tab="my-enrollments"
          href="/education/my-enrollments"
        >
          <ion-icon
            aria-hidden="true"
            :icon="bookOutline"
          />
          <ion-label>{{ $t('my-enrollments') }}</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue'
import { bookOutline, searchOutline } from 'ionicons/icons'
</script>


<fluent locale="en">
courses = Courses
my-enrollments = My Groups
</fluent>
