
# Not Tutma Uygulaması
Bu proje, Electron.js, Vite, React, shadcn UI ve TailwindCSS kullanılarak geliştirilmiş bir masaüstü not tutma uygulamasıdır. Uygulama, kullanıcıların notlar eklemesine, düzenlemesine, silmesine ve silinen notları geri almasına olanak tanır.
## Kurulum Talimatları 

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları takip edin.

Gereksinimler
- Node.js: Projeyi çalıştırmak için Node.js'in yüklü olması gerekiyor. https://nodejs.org/tr

- Git: Projeyi klonlamak için Git'in yüklü olması gerekiyor. https://git-scm.com/

Projeyi Klonlama
- Projeyi klonlamak için terminalinizde aşağıdaki komutu çalıştırın:

```bash
git clone https://github.com/anilkaragozz/note-app.git
cd not-app
```
- Bağımlılıkları Yükleme
Projenin bağımlılıklarını yüklemek için aşağıdaki komutu çalıştırın:
```bash
npm install 
```
- Geliştirme Modunda Çalıştırma
Projeyi geliştirme modunda çalıştırmak için aşağıdaki komutu kullanın:
```bash
cd note-app
npm run dev
```
Yeni bir terminal ekranında
```bash
cd notApp
npm run dev
```
Bu komutlar, Vite dev server'ını ve Electron uygulamasını başlatacaktır.

Uygulamayı Build Etme
- Uygulamayı build etmek ve paketlemek için aşağıdaki komutu kullanın:
```bash
npm run build
npx electron-builder
```
Bu komut, uygulamayı paketleyerek dist klasörüne çıktı verecektir.

## Kullanılan Teknolojiler

Bu projede aşağıdaki teknolojiler ve kütüphaneler kullanılmıştır:

- Electron.js       : Masaüstü uygulaması geliştirmek için kullanıldı.
- Vite              : Hızlı ve modern bir frontend build aracı olarak kullanıldı.
- React             : Kullanıcı arayüzü geliştirmek için kullanıldı.
- TailwindCSS       : Hızlı ve modern CSS framework'ü olarak kullanıldı.
- shadcn UI         : Önceden hazırlanmış UI component'leri için kullanıldı.
- electron-store    : Notları lokal olarak saklamak için kullanıldı.
- Git               : Versiyon kontrolü için kullanıldı.
- Node.js           : Backend işlemleri ve Electron.js entegrasyonu için kullanıldı.


## Özellikler

Not Ekleme:
- Ana ekranda bulunan "Submit" butonuna tıklayarak yeni bir not ekleyebilirsiniz.
- Notlar, electron-store kullanılarak lokal olarak saklanır.
Not Düzenleme:
- Her notun yanında bulunan "Kalem" simgesi bulunan buton ile notları düzenleyebilirsiniz.
Not Silme:
- Her notun yanında bulunan "Çöp" simgesi bulunan buton ile notları silebilirsiniz. 
Not Geri Alma:
- Silinen notlar, "Show Deleted Notes" filtresi ile görüntülenebilir ve "Dönen ok" simgesi bulunan buton ile geri yüklenebilir.
  