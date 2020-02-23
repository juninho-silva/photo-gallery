import React from 'react';
import { IonContent, IonRow, IonHeader, IonIcon, IonFab, IonFabButton, IonPage, IonTitle, IonToolbar, IonGrid, IonCol, IonImg } from '@ionic/react';
import { camera, albums } from 'ionicons/icons';
import { usePhotoGallery } from '../hooks/usePhotoGallery';

const Tab2: React.FC = () => {

  const { photos, takePhoto } = usePhotoGallery();
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonIcon icon={albums}></IonIcon> 
          <IonTitle>Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <IonGrid>
          <IonRow>

            { photos.map(( photo, index ) => (
              <IonCol size="6" key={index}>
                <IonImg src={ photo.base64 ?? photo.webviewPath } />
              </IonCol>
            ))}

          </IonRow>
        </IonGrid>

        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;