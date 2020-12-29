<b>NOTE:</b>

_I'M NOT THE OWNER OF THIS PROJECT AND ALL THE WORK BEHIND THIS ROM IS THANKS TO THE SWITCHROOT ORGANIZATION._

_THESE BUILDS ARE PUBLISHED WITHOUT ANY GUARANTEE OR SUPPORT, ARE JUST PERSONAL BUILDS COMPILED BY ME THANKS TO THE SOURCE CODE AVAILABLE AT <b><a href="https://gitlab.com/switchroot/android/android_device_nvidia_t210-common/-/tree/lineage-17.1">SWITCHROOT GITLAB REPOSITORY</b></a>_
<br/>
<br/>


# LineageOS Switch
<img src="https://github.com/daviiid99/Lineageos-17.1-T210-Switch-/blob/main/qbuilds.png">
Android 10.x builds for Nintendo Switch based on the open-source project LineageOS
<br/>

All the builds in this repository were compiled using the official <a href="https://github.com/LineageOS/android">LineageOS</a> and <a href="https://gitlab.com/switchroot/android">Switchroot</a> sources

## Versiones soportadas

| Version           | Releases                                   | Sources          |
| ------------------- | -------------------------------------------|-------------------|
| Vanilla      |  <a href="https://github.com/daviiid99/LineageOS-Switch-T210/releases/tag/20201226">Download/Descargar</a>|<a href="https://gitlab.com/switchroot/android/android_device_nvidia_t210-common/-/tree/lineage-17.1">Source</a>|
| Vanilla + NVIDIA Apps|   <a href="https://github.com/daviiid99/LineageOS-Switch-T210/releases/tag/20201228">Download/Descargar</a>|<a href="https://gitlab.com/switchroot/android/android_device_nvidia_t210-common/-/tree/lineage-17.1">Source</a>|
| Android TV + NVIDIA  Apps      | <a href="https://github.com/daviiid99/LineageOS-Switch-T210/releases/tag/20201228.1">Download/Descargar</a>|<a href="https://gitlab.com/switchroot/android/android_device_nvidia_t210-common/-/tree/lineage-17.1">Source</a>|



# How to flash this ROM (English Instructions)

```!!! Please, create a single FAT32 partition on your microSD card with GParted and format the partition on an android device before starting this guide!!!```

1.- Grab the latest update from <a href="https://github.com/daviiid99/Lineageos-17.1-T210-Switch/releases">Releases</a>
  (Download both files, the <b>lineage-17.1-[date]-UNOFFICIAL-[codename]-daviiid99.zip</b> and the <b>Hekate SD.zip</b>)
  
2.- Extract the <b>Hekate SD.zip</b> contents into your SD Card root and copy the <b>lineage-17.1-[date]-UNOFFICIAL-[codename]-daviiid99.zip</b> file in the root as well.
  
3.- Launch Hekate on your non-mariko Switch and go to <b>Tools> Arch bit • RCM • Touch • Partitions> Partition SD Card</b>

4.- Use the slider to give <b>Android</b> some space, then select <b>Next Step</b> to start the repartition process.

``` If hekate doesn't give you the chance to backup the SD files, repeat step 1 with the result partition scheme to copy the files in the main partition```
  
5.- Select the <b>Flash Android</b> option, when finished presh <b>Continue</b>.
  
6.- When prompted to reboot into TWRP, select <b>Continue</b>.
  
7.- In TWRP, select the <b>MOUNT</b> option and mount all possible partitions.

8.- Return to TWRP main menu and select the <b> Install </b> option , then <b>Select Storage</b> and choose the <b>Micro SD card</b> option and select the <b>lineage-17.1-[date]-UNOFFICIAL-[codename]-daviiid99.zip</b> file from root directory.
  
9.- Wait for the flash process to finish, then return and select <b>Reboot> System</b>.
 
10.- Your Switch will boot into LineageOS system.
 <br/>
 <br/>
 
<b>(Extras): You can flash the following add-ons from TWRP </b>

```GApps:```
<b><a href="https://opengapps.org/">OpenGApps</a>/<a href="https://sourceforge.net/projects/nikgapps/files/Releases/NikGapps-Q/">NikGApps</a> </b> 

```Magisk:```
<b><a href="https://github.com/topjohnwu/Magisk/releases">Magisk Stable release</a></b>
```
NOTE: Switch AArch is ARM64-v8a, choose ARM64 GApps package.
NOTE: Don´t flash Magisk or GApps on first boot, reboot to TWRP later.
NOTE: To boot into TWRP, launch the switchroot android payload from hekate and press VOL+.
```

# How to update this ROM (English Instructions)

1.- Grab the latest update from <a href="https://github.com/daviiid99/Lineageos-17.1-T210-Switch/releases">Releases</a>
  (Download both files, the <b>lineage-17.1-[date]-UNOFFICIAL-[codename]-daviiid99.zip</b> and the <b>Hekate SD.zip</b>)
  
2.- Extract the <b>Hekate SD.zip</b> contents into your SD Card root and copy the <b>lineage-17.1-[date]-UNOFFICIAL-[codename]-daviiid99.zip</b> file in the root as well.
  
3.- Launch Hekate on your non-mariko Switch and go to <b>Payloads> to launch Switchroot android payload

4.- To boot into TWRP, press Vol+ on boot.

5.- In TWRP, select the <b>MOUNT</b> option and mount all possible partitions.

6.- Return to TWRP main menu and select the <b> Install </b> option , then <b>Select Storage</b> and choose the <b>Micro SD card</b> option and select the <b>lineage-17.1-[date]-UNOFFICIAL-[codename]-daviiid99.zip</b> file from root directory.
  
7.- Wait for the flash process to finish, then return and select <b>Reboot> System</b>.
 
10.- Your Switch will boot into LineageOS system.
 <br/>
 <br/>


# Cómo instalar esta ROM (Spanish Instructions)

```!!! Por favor, crea una única partición FAT32 en tu microSD desde GParted y formateala en un dispositivo android antes de empezar esta guía!!!```

1.- Descarga la última actualización de <a href="https://github.com/daviiid99/Lineageos-17.1-T210-Switch/releases">Releases</a>
  (Descarga ambos archivos, el <b>lineage-17.1-[fecha]-UNOFFICIAL-[modelo]-daviiid99.zip</b> y el <b>Hekate SD.zip</b>)
  
2.- Extrae el archivo <b>Hekate SD.zip</b> en la raíz de tu SD y copia el archivo <b>lineage-17.1-[fecha]-UNOFFICIAL-[modelo]-daviiid99.zip</b> también en la raíz.
  
3.- Ejecuta Hekate en tu Switch(no Mariko) y selecciona las opciones siguientes <b>Tools> Arch bit • RCM • Touch • Partitions> Partition SD Card</b>

4.- Use el slider para dar a <b>Android</b> espacio en su partición, y selecciona <b>Next Step</b> para reparticionar la SD.

```Si en este paso hekate te borra los archivos de la SD sin hacer backup, reintroducela en el PC y copialos de nuevo en la partición principal```
  
5.- Selecciona la opción <b>Flash Android</b>, cuando finalize pulsa <b>Continue</b>
  
6.- Cuando te pregunte sobre iniciar TWRP, selecciona <b>Continue</b>
  
7.- En TWRP, selecciona la opción <b>MOUNT</b> y monta todas las particiones posibles.

8.- Retrocede al menú principal de TWRP y selecciona la opción <b> Install </b>, después <b>Select Storage</b> y elige <b>Micro SD card</b> y selecciona el archivo de la rom, el <b>lineage-17.1-[fecha]-UNOFFICIAL-[modelo]-daviiid99.zip</b> de la raíz.
  
9.- Espera a que termine de instalarse la ROM, cuando finalice retrocede al menú principal y selecciona <b>Reboot> System</b>
 
10.- Tu Nintendo Switch iniciará LineageOS sin problemas.
 <br/>
 <br/>
 
<b>(Extras): Puedes instalar los siguientes paquetes desde TWRP</b>

```GApps:```
<b><a href="https://opengapps.org/">OpenGApps</a>/<a href="https://sourceforge.net/projects/nikgapps/files/Releases/NikGapps-Q/">NikGApps</a> </b> 

```Magisk:```
<b><a href="https://github.com/topjohnwu/Magisk/releases">Magisk Estable release</a></b>
```
NOTA: La arquitectura de Switch es ARM64-v8a, selecciona ARM64 GApps.
NOTA: No instales Magisk o GApps en el primer inicio, inicia TWRP más tarde.
NOTA: Para iniciar TWRP, lanza el payload de switchroot android desde hekate y presiona VOL+.
```

# Cómo actualizar esta ROM (Spanish Instructions)

1.- Descarga la última actualización de <a href="https://github.com/daviiid99/Lineageos-17.1-T210-Switch/releases">Releases</a>
  (Descarga ambos archivos, el <b>lineage-17.1-[fecha]-UNOFFICIAL-[modelo]-daviiid99.zip</b> y el <b>Hekate SD.zip</b>)
  
2.- Extrae el archivo <b>Hekate SD.zip</b> en la raíz de tu SD y copia el archivo <b>lineage-17.1-[fecha]-UNOFFICIAL-[modelo]-daviiid99.zip</b> también en la raíz.
  
3.- Lanza Hekate en tu Switch y ve a <b>Payloads> para lanzar el payload de Switchroot android.

4.- Para iniciar TWRP, presiona Vol+ en el arranque.

5.- En TWRP, selecciona la opción <b>MOUNT</b> y monta todas las particiones posibles.

6.- Retrocede al menú principal de TWRP y selecciona la opción <b> Install </b>, después <b>Select Storage</b> y elige <b>Micro SD card</b> y selecciona el archivo de la rom, el <b>lineage-17.1-[fecha]-UNOFFICIAL-[modelo]-daviiid99.zip</b> de la raíz.
  
7.- Espera a que termine de instalarse la ROM, cuando finalice retrocede al menú principal y selecciona <b>Reboot> System</b>
 
8.- Tu Nintendo Switch iniciará LineageOS sin problemas.
 <br/>
 <br/>
