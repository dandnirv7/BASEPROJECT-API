# API Dokumentasi

- [Peran (Roles)](#peran-roles)
  - [Daftar Semua Peran (Find All Roles)](#daftar-semua-peran-find-all-roles)
  - [Menemukan Satu Peran (Find One Role)](#menemukan-satu-peran-find-one-role)
  - [Membuat Peran Baru (Create Role)](#membuat-peran-baru-create-role)
  - [Memperbarui Data Peran (Update)](#memperbarui-data-peran-update-role)
  - [Memperbarui Data Peran (Patch)](#memperbarui-data-peran-patch-role)
  - [Menghapus Data Peran (Delete)](#menghapus-data-peran-delete-role)
- [Pengguna (Users)](#pengguna-users)
  - [Membuat Pengguna Baru (Register)](#membuat-pengguna-baru-register)
  - [Masuk Pengguna (Login)](#masuk-pengguna-login)
  - [Daftar Semua Pengguna (Find All Users)](#daftar-semua-pengguna-find-all-users)
  - [Menemukan Satu Pengguna (Find One User)](#menemukan-satu-pengguna-find-one-user)
  - [Memperbarui Data Pengguna (Update)](#memperbarui-data-pengguna-update-user)
  - [Memperbarui Data Pengguna (Patch)](#memperbarui-data-pengguna-patch-user)
  - [Menghapus Data Pengguna (Delete)](#menghapus-data-pengguna-delete-user)
- [Layanan (Services)](#layanan-services)
  - [Daftar Semua Layanan (Find All Services)](#daftar-semua-layanan-find-all-services)
  - [Menemukan Satu Layanan (Find One Service)](#menemukan-satu-layanan-find-one-service)
  - [Membuat Layanan Baru (Create Service)](#membuat-layanan-baru-create-service)
  - [Memperbarui Data Layanan (Update)](#memperbarui-data-layanan-update-service)
  - [Memperbarui Data Layanan (Patch)](#memperbarui-data-layanan-patch-service)
  - [Menghapus Data Layanan (Delete)](#menghapus-data-layanan-delete-service)
- [Pesanan (Orders)](#pesanan-orders)
  - [Daftar Semua Pesanan(Find All Orders)](#daftar-semua-pesanan-find-all-orders)
  - [Menemukan Satu Pesanan(Find One Order)](#menemukan-satu-pesanan-find-one-order)
  - [Membuat Pesanan Baru (Create Order)](#membuat-pesanan-baru-create-order)
  - [Memperbarui Data Pesanan(Update Order)](#memperbarui-data-pesanan-update-order)
  - [Memperbarui Data Pesanan(Patch Order)](#memperbarui-data-pesanan-patch-order)
  - [Menghapus Data Pesanan(Delete Order)](#menghapus-data-pesanan-delete-order)
- [Pembayaran (Payments)](#pembayaran-payments)
  - [Daftar Semua Pembayaran(Find All Payments)](#daftar-semua-pembayaran-find-all-payments)
  - [Menemukan Satu Pembayaran(Find One Payment)](#menemukan-satu-pembayaran-find-one-payment)
  - [Membuat Pembayaran Baru (Create Payment)](#membuat-pembayaran-baru-create-payment)
  - [Memperbarui Data Pembayaran(Update Payment)](#memperbarui-data-pembayaran-update-payment)
  - [Memperbarui Data Pembayaran(Patch Payment)](#memperbarui-data-pembayaran-patch-payment)
  - [Menghapus Data Pembayaran(Delete Payment)](#menghapus-data-pembayaran-delete-payment)

## Peran (Roles)

### Daftar Semua Peran (Find All Roles)

Mengembalikan daftar semua peran yang terdaftar pada sistem.

#### Endpoint

```
GET /role?role_id=1 HTTP/1.1
```

#### Parameter Permintaan (Request Parameter)

| Parameter | Tipe    | Wajib | Deskripsi                       |
| --------- | ------- | ----- | ------------------------------- |
| role_id   | integer | Ya    | ID peran pengguna (role_id = 1) |

#### Header Permintaan (Request Headers)

```
Authorization: Bearer <access_token>
```

#### Contoh Permintaan (Request Example)

```
GET /role HTTP/1.1
Host: api.example.com
Authorization: Bearer <access_token>
```

#### Contoh Tanggapan (Response Example)

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "status": 200,
  "message": "OK",
  "data": [
    {
      "role_id": 1,
      "role_name": "Super User",
      "createdAt": "2023-06-08T03:19:16.000Z",
      "updatedAt": "2023-06-08T03:19:16.000Z"
    },
    {
      "role_id": 2,
      "role_name": "Admin",
      "createdAt": "2023-06-08T03:19:16.000Z",
      "updatedAt": "2023-06-08T03:19:16.000Z"
    },
    {
      "role_id": 3,
      "role_name": "User",
      "createdAt": "2023-06-08T03:19:16.000Z",
      "updatedAt": "2023-06-08T03:19:16.000Z"
    },
  ]
}

```

#### Kesalahan (Errors)

| Kode | Deskripsi                                                        |
| ---- | ---------------------------------------------------------------- |
| 401  | Unauthorized - Token tidak valid atau tidak ditemukan            |
| 403  | Forbidden - Akses ditolak karena peran pengguna bukan super user |

### Menemukan Satu Peran (Find One Role)

Operasi untuk mencari informasi tentang satu role tertentu berdasarkan kriteria tertentu.

#### Endpoint

```
GET /role/{role_id}?role_id=1 HTTP/1.1
```

#### Parameter Permintaan (Request Parameter)

| Parameter | Tipe    | Wajib | Deskripsi          |
| --------- | ------- | ----- | ------------------ |
| role_id   | integer | Ya    | ID peran (role_id) |

#### Header Permintaan (Request Headers)

```
Authorization: Bearer <access_token>
```

#### Contoh Permintaan (Request Example)

```
GET /role/1 HTTP/1.1
Host: api.example.com
Authorization: Bearer <access_token>
```

#### Contoh Tanggapan (Response Example)

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "status": 200,
  "message": "OK",
  "data": {
    "role_id": 1,
    "role_name": "Super User",
    "createdAt": "2023-06-08T03:19:16.000Z",
    "updatedAt": "2023-06-08T03:19:16.000Z"
  }
}
```

#### Kesalahan (Errors)

| Kode | Deskripsi                                                        |
| ---- | ---------------------------------------------------------------- |
| 401  | Unauthorized - Token tidak valid atau tidak ditemukan            |
| 403  | Forbidden - Akses ditolak karena peran pengguna bukan super user |
| 404  | Not Found - Data tidak valid atau tidak ditemukan                |

### Membuat Peran Baru (Create Role)

Operasi untuk membuat peran baru.

#### Endpoint

```
POST /role?role_id=1 HTTP/1.1
```

#### Contoh Badan Permintaan (Request Body Example)

| atribut   | tipe   | deskripsi  |
| --------- | ------ | ---------- |
| role_name | string | Nama peran |

#### Contoh Permintaan (Request Example)

```
POST /role HTTP/1.1
Host: api.example.com
Authorization: bearer <access_token>

{
  "role_name": "role example",
}
```

#### Contoh Tanggapan (Response Example)

```
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8

{
  "status": 201,
  "message": "Created",
  "data": {
    "role_id": 4,
    "role_name": "role example",
    "updatedAt": "2023-06-08T06:59:50.817Z",
    "createdAt": "2023-06-08T06:59:50.817Z"
  }
}

```

#### Kesalahan (Errors)

| Kode | Deskripsi                                                        |
| ---- | ---------------------------------------------------------------- |
| 401  | Unauthorized - Token tidak valid atau tidak ditemukan            |
| 403  | Forbidden - Akses ditolak karena peran pengguna bukan super user |

### Memperbarui Data Peran (Update Role)

Operasi untuk memperbarui informasi satu peran tertentu berdasarkan kriteria tertentu.

#### Endpoint

```
PUT /role/{role_id}?role_id=1
```

#### Parameter Permintaan (Request Parameter)

| Parameter | Tipe    | Wajib | Deskripsi          |
| --------- | ------- | ----- | ------------------ |
| role_id   | integer | Ya    | ID peran (role_id) |

#### Header Permintaan (Request Headers)

```
Authorization: Bearer <access_token>
```

#### Contoh Permintaan (Request Example)

```
PUT /role/4 HTTP/1.1
Content-Type: application/json
Host: api.example.com
Authorization: Bearer <access_token>

{
  "role_id": 4
  "role_name": "Pegawai",
}
```

#### Contoh Tanggapan (Response Example)

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "status": 200,
  "message": "OK",
  "data": {
    "role_id": 4,
    "role_name": "Pegawai",
    "createdAt": "2023-06-08T06:53:13.000Z",
    "updatedAt": "2023-06-08T07:13:51.915Z"
  }
}
```

#### Kesalahan (Errors)

| Kode | Deskripsi                                                                      |
| ---- | ------------------------------------------------------------------------------ |
| 400  | Bad Request - Kolom wajib diisi tidak ada pada badan permintaan (request body) |
| 401  | Unauthorized - Token tidak valid atau tidak ditemukan                          |
| 403  | Forbidden - Akses ditolak karena peran pengguna bukan super user               |

| 404 | Not Found - Data tidak valid atau tidak ditemukan |

### Memperbarui Data Peran (Patch Role)

Operasi untuk memperbarui beberapa informasi peran tertentu berdasarkan kriteria tertentu.

#### Endpoint

```
PATCH /role/{role_id}?role_id=1
```

#### Parameter Permintaan (Request Parameter)

| Parameter | Tipe    | Wajib | Deskripsi          |
| --------- | ------- | ----- | ------------------ |
| role_id   | integer | Ya    | ID peran (role_id) |

#### Header Permintaan (Request Headers)

```
Authorization: Bearer <access_token>
```

#### Contoh Permintaan (Request Example)

```
PATCH /role/4 HTTP/1.1
Host: api.example.com
Authorization: bearer <access_token>

{
  "role_name": "Pelanggan"
}
```

#### Contoh Tanggapan (Response Example)

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "status": 200,
  "message": "Patch Successfully",
  "data": {
    "role_id": 4,
    "role_name": "Pelanggan",
    "createdAt": "2023-06-08T06:59:48.000Z",
    "updatedAt": "2023-06-08T07:19:55.056Z"
  }
}
```

#### Kesalahan (Errors)

| Kode | Deskripsi                                                   |
| ---- | ----------------------------------------------------------- |
| 401  | Unauthorized - Token tidak valid atau tidak ditemukan       |
| 403  | Forbidden - Akses ditolak karena peran pengguna bukan admin |
| 404  | Not Found - Data tidak valid atau tidak ditemukan           |

### Menghapus Data Peran (Delete Role)

Operasi untuk menghapus data peran tertentu berdasarkan kriteria tertentu.

#### Endpoint

```
DELETE /role/{role_id}?role_id=1
```

#### Parameter Permintaan (Request Parameter)

| Parameter | Tipe    | Wajib | Deskripsi          |
| --------- | ------- | ----- | ------------------ |
| role_id   | integer | Ya    | ID peran (role_id) |

#### Header Permintaan (Request Headers)

```
Authorization: Bearer <access_token>
```

#### Contoh Permintaan (Request Example)

```
DELETE /role/4 HTTP/1.1
Host: api.example.com
Authorization: Bearer <access_token>
```

#### Contoh Tanggapan (Response Example)

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status": 200,
    "message": "Data has been deleted",
    "data": null
}
```

#### Kesalahan (Errors)

| Kode | Deskripsi                                                        |
| ---- | ---------------------------------------------------------------- |
| 401  | Unauthorized - Token tidak valid atau tidak ditemukan            |
| 403  | Forbidden - Akses ditolak karena peran pengguna bukan super user |
| 404  | Not Found - Data tidak valid atau tidak ditemukan                |

## Pengguna (Users)

### Membuat Pengguna Baru (Register)

Operasi untuk mendaftarkan pengguna baru.

#### Endpoint

```
POST /register
```

#### Contoh Badan Permintaan (Request Body Example)

| atribut          | tipe   | deskripsi                             |
| ---------------- | ------ | ------------------------------------- |
| name             | string | Nama lengkap pengguna                 |
| username         | string | Nama pengguna                         |
| email            | string | Alamat email pengguna                 |
| password         | string | Kata sandi pengguna                   |
| confirm_password | string | Konfirmasi kata sandi                 |
| phone            | string | Nomor telepon atau handphone pengguna |

#### Contoh Permintaan (Request Example)

```
POST /register HTTP/1.1
Host: api.example.com
Authorization: bearer <access_token>

{
  "name": "John Doe",
  "username": "johndoe7"
  "email": "johndoe@example.com",
  "password": "johndoe123",
  "confirm_password": "johndoe123",
  "phone": 08123456789
}
```

#### Contoh Tanggapan (Response Example)

```
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8

{
  "status": 201,
  "message": "Created",
  "data": {
    "user_id": 3,
    "name": "John Doe",
    "username": "johndoe7",
    "email": "johndoe@example.com",
    "password": "$2a$10$4tTUALreHVk.LlBOQ6hJWOYyr/t8k3wZdO4CD9YwczZUfggxFrECu",
    "phone": "08123456789",
    "role_id": 3,
    "updatedAt": "2023-06-08T00:30:05.795Z",
    "createdAt": "2023-06-08T00:30:05.795Z"
  }
}
```

#### Kesalahan (Errors)

| Kode | Deskripsi                                                                                                          |
| ---- | ------------------------------------------------------------------------------------------------------------------ |
| 400  | Bad Request - Kolom wajib diisi tidak ada pada badan permintaan (request body) atau Email/Username telah digunakan |

### Masuk Pengguna (Login)

#### Deskripsi:

Memeriksa kredensial dan menghasilkan token akses

#### Endpoint

```
POST /login HTTP/1.1
```

#### Badan Permintaan (Request Body)

| atribut  | tipe   | deskripsi             |
| -------- | ------ | --------------------- |
| email    | string | Alamat email pengguna |
| password | string | Kata sandi pengguna   |

#### Contoh Permintaan (Request Example)

```
POST /login HTTP/1.1
{
  "email": "johndoe@example.com",
  "password": "johndoe123"
}

```

#### Contoh Tanggapan (Response Example)

```
HTTP/1.1 200 OK
Content-Type: application/json;charset=utf-8

{
  "status": 200,
  "message": "Successfully login",
  "data": {
    "role_id": 3,
    "username": "johndoe7",
    "email": "johndoe@example.com",
    "phone": "08123456789",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlX2lkIjozLCJ1c2VybmFtZSI6ImpvaG5kb2U3IiwiZW1haWwiOiJqb2huZG9lQGV4YW1wbGUuY29tIiwicGhvbmUiOiIwODEyMzQ1Njc4OSIsImlhdCI6MTY4NjE4NDQ0MSwiZXhwIjoxNjg2MTg1MzQxfQ.Qc2wPvR2E1pYGwzx9lNEQP0cRCQPE6NFbHUtqgjlacY"
  }
}
```

#### Kesalahan (Errors)

| Kode | Deskripsi                                     |
| ---- | --------------------------------------------- |
| 401  | Unauthorized: Email atau Password tidak valid |

### Daftar Semua Pengguna (Find All Users)

Mengembalikan daftar semua pengguna yang terdaftar pada sistem.

#### Endpoint

```
GET /user?role_id=2 HTTP/1.1
```

#### Header Permintaan (Request Headers)

```
Authorization: Bearer <access_token>
```

#### Contoh Permintaan (Request Example)

```
GET /user HTTP/1.1
Host: api.example.com
Authorization: Bearer <access_token>
```

#### Contoh Respon (Response Example)

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "status": 200,
  "message": "OK",
  "data": [
    {
      "user_id": 1,
      "role_id": 1,
      "name": "Superuser",
      "username": "superuser",
      "email": "superuser@example.com",
      "password": "$2a$10$dURGhfe7S5/8iKMasrd/beBSvrHUfN/pdE9gHiDDh/cBgwH8S4PNS",
      "phone": "123456789",
      "accessToken": null,
      "createdAt": "2023-06-08T03:29:07.000Z",
      "updatedAt": "2023-06-08T03:29:07.000Z"
    },
    {
      "user_id": 2,
      "role_id": 2,
      "name": "Admin",
      "username": "admin",
      "email": "admin@example.com",
      "password": "$2a$10$s6p3zSew04s6nmXW3Z823uQy/MJlaQ0Zh39LzR4f0eWUJIb9uVKYW",
      "phone": "987654321",
      "accessToken": null,
      "createdAt": "2023-06-08T03:29:07.000Z",
      "updatedAt": "2023-06-08T04:18:40.000Z"
    },
    {
      "user_id": 3,
      "role_id": 3,
      "name": "John Doe",
      "username": "johndoe7",
      "email": "johndoe@example.com",
      "password": "$2a$10$yHqrrWlXUYTIBfnNhyHwfe0gDvFZPOUsOKhU62MfsXlOkiD6wCIym",
      "phone": "08123456789",
      "accessToken": null,
      "createdAt": "2023-06-08T03:29:44.000Z",
      "updatedAt": "2023-06-08T03:57:17.000Z"
    }
  ]
}

```

#### Kesalahan (Errors)

| Kode | Deskripsi                                                   |
| ---- | ----------------------------------------------------------- |
| 401  | Unauthorized - Token tidak valid atau tidak ditemukan       |
| 403  | Forbidden - Akses ditolak karena peran pengguna bukan admin |

### Menemukan Satu Pengguna (Find One User)

Operasi untuk mencari informasi tentang satu pengguna tertentu berdasarkan kriteria tertentu.

#### Endpoint

```
GET /user/{user_id}?role_id=3 HTTP/1.1
```

#### Parameter Permintaan (Request Parameter)

| Parameter | Tipe    | Wajib | Deskripsi             |
| --------- | ------- | ----- | --------------------- |
| user_id   | integer | Ya    | ID pengguna (user_id) |

#### Header Permintaan (Request Headers)

```
Authorization: Bearer <access_token>
```

#### Contoh Permintaan (Request Example)

```
GET /user/3 HTTP/1.1
Host: api.example.com
Authorization: Bearer <access_token>
```

#### Contoh Tanggapan (Response Example)

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "status": 200,
  "message": "OK",
  "data": {
    "user_id": 3,
    "role_id": 3,
    "name": "John Doe",
    "username": "johndoe7",
    "email": "johndoe@example.com",
    "password": "$2a$10$yHqrrWlXUYTIBfnNhyHwfe0gDvFZPOUsOKhU62MfsXlOkiD6wCIym",
    "phone": "08123456789",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlX2lkIjozLCJ1c2VybmFtZSI6ImpvaG5kb2U3IiwiZW1haWwiOiJqb2huZG9lQGV4YW1wbGUuY29tIiwicGhvbmUiOiIwODEyMzQ1Njc4OSIsImlhdCI6MTY4NjIwMTMxMSwiZXhwIjoxNjg2Mjg3NzExfQ.UfK7uDxxlB5JMSOcRDE9Mn7UMuBI2jyv_UFNs9HJTAU",
    "createdAt": "2023-06-08T03:29:44.000Z",
    "updatedAt": "2023-06-08T05:15:11.000Z"
  }
}
```

#### Kesalahan (Errors)

| Kode | Deskripsi                                             |
| ---- | ----------------------------------------------------- |
| 401  | Unauthorized - Token tidak valid atau tidak ditemukan |
| 404  | Not Found - Data tidak valid atau tidak ditemukan     |

### Memperbarui Data Pengguna (Update User)

Operasi untuk memperbarui informasi satu pengguna tertentu berdasarkan kriteria tertentu.

#### Endpoint

```
PUT /user/{user_id}?role_id=2 HTTP/1.1
```

#### Parameter Permintaan (Request Parameter)

| Parameter | Tipe    | Wajib | Deskripsi             |
| --------- | ------- | ----- | --------------------- |
| user_id   | integer | Ya    | ID pengguna (user_id) |

#### Header Permintaan (Request Headers)

```
Authorization: bearer <access_token>
```

#### Contoh Permintaan (Request Example)

```
PUT /user/4 HTTP/1.1
Host: api.example.com
Authorization: Bearer <access_token>
```

#### Contoh Tanggapan (Response Example)

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "status": 200,
  "message": "OK",
  "data": {
    "user_id": 4,
    "role_id": 3,
    "name": "Sammy Smith",
    "username": "Sammy Smith",
    "email": "sammy19example@gmail.com",
    "password": "$2a$10$kL3FFtBbcalSY5bA65I96OoI5mpP3K1GwNtKaeyArLBjX86ggru3i",
    "phone": "08234214213",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJeyJyb2xlX2lkIjozLCJ1c2VybmFtZSI6InNhbW15NyIsImVtYWlsIjoic2FtbXlzbWl0BleGFtcGxlLmNvbSIsInBob25lIjoiMDgxMjM0NTY3ODkiLCJpYXQiOjE2ODYyMDIwNjImV4cCI6MTY4NjI4ODQ2MX0.QRnvyQdWhRt8zReP5NJMiebAUyYHlFBDiGEbv18RCA8",
    "createdAt": "2023-06-08T04:43:12.000Z",
    "updatedAt": "2023-06-08T05:33:32.271Z"
  }
}
```

#### Kesalahan (Errors)

| Kode | Deskripsi                                                                      |
| ---- | ------------------------------------------------------------------------------ |
| 400  | Bad Request - Kolom wajib diisi tidak ada pada badan permintaan (request body) |
| 401  | Unauthorized - Token tidak valid atau tidak ditemukan                          |
| 403  | Forbidden - Akses ditolak karena peran pengguna bukan admin                    |
| 404  | Not Found - Data tidak valid atau tidak ditemukan                              |

### Memperbarui Data Pengguna (Patch User)

Operasi untuk memperbarui beberapa informasi pengguna tertentu berdasarkan kriteria tertentu.

#### Endpoint

```
PATCH /user/{user_id}?role_id=2 HTTP/1.1
```

#### Parameter Permintaan (Request Parameter)

| Parameter | Tipe    | Wajib | Deskripsi             |
| --------- | ------- | ----- | --------------------- |
| user_id   | integer | Ya    | ID pengguna (user_id) |

#### Header Permintaan (Request Headers)

```
Authorization: Bearer <access_token>
```

#### Contoh Permintaan (Request Example)

```
PATCH /user/4 HTTP/1.1
Host: api.example.com
Authorization: Bearer <access_token>

{
  "username": "sammy9"
}

```

#### Contoh Tanggapan (Response Example)

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "status": 200,
  "message": "OK",
  "data": {
    "user_id": 4,
    "role_id": 3,
    "name": "Sammy Smith",
    "username": "sammy9",
    "email": "sammy9@example.com",
    "password": "$2a$10$kL3FFtBbcalSY5bA65I96OoI5mpP3K1GwNtKaeyArLBjX86ggru3i",
    "phone": "08234214213",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJeyJyb2xlX2lkIjozLCJ1c2VybmFtZSI6InNhbW15NyIsImVtYWlsIjoic2FtbXlzbWl0BleGFtcGxlLmNvbSIsInBob25lIjoiMDgxMjM0NTY3ODkiLCJpYXQiOjE2ODYyMDIwNjImV4cCI6MTY4NjI4ODQ2MX0.QRnvyQdWhRt8zReP5NJMiebAUyYHlFBDiGEbv18RCA8",
    "createdAt": "2023-06-08T04:43:12.000Z",
    "updatedAt": "2023-06-08T05:33:32.271Z"
  }
}
```

#### Kesalahan (Errors)

| Kode | Deskripsi                                                   |
| ---- | ----------------------------------------------------------- |
| 401  | Unauthorized - Token tidak valid atau tidak ditemukan       |
| 403  | Forbidden - Akses ditolak karena peran pengguna bukan admin |
| 404  | Not Found - Data tidak valid atau tidak ditemukan           |

### Menghapus Data Pengguna (Delete User)

Operasi untuk menghapus data pengguna tertentu berdasarkan kriteria tertentu.

#### Endpoint

```
DELETE /user/{user_id}?role_id=1 HTTP/1.1
```

#### Parameter Permintaan (Request Parameter)

| Parameter | Tipe    | Wajib | Deskripsi             |
| --------- | ------- | ----- | --------------------- |
| user_id   | integer | Ya    | ID pengguna (user_id) |

#### Header Permintaan (Request Headers)

```
Authorization: Bearer <access_token>
```

#### Contoh Permintaan (Request Example)

```
GET /user/4 HTTP/1.1
Host: api.example.com
Authorization: Bearer <access_token>
```

#### Contoh Tanggapan (Response Example)

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status": 200,
    "message": "Data has been deleted",
    "data": null
}
```

#### Kesalahan (Errors)

| Kode | Deskripsi                                                        |
| ---- | ---------------------------------------------------------------- |
| 401  | Unauthorized - Token tidak valid atau tidak ditemukan            |
| 403  | Forbidden - Akses ditolak karena peran pengguna bukan super user |
| 404  | Not Found - Data tidak valid atau tidak ditemukan                |

## Layanan (Services)

### Daftar Semua Layanan (Find All Services)

Mengembalikan daftar semua layanan yang terdaftar pada sistem.

#### Endpoint

```
GET /service HTTP/1.1
```

#### Parameter Permintaan (Request Parameter)

| Parameter | Tipe    | Wajib | Deskripsi                       |
| --------- | ------- | ----- | ------------------------------- |
| role_id   | integer | Ya    | ID peran pengguna (role_id = 3) |

#### Header Permintaan (Request Headers)

```
Authorization: Bearer <access_token>
```

#### Contoh Permintaan (Request Example)

```
GET /service?role_id=3 HTTP/1.1
Host: api.example.com
Authorization: Bearer <access_token>
```

#### Contoh Respon (Response Example)

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "status": 200,
  "message": "OK",
  "data": [
    {
      "service_id": 1,
      "service_name": "Cuci Komplit Reguler",
      "service_type": "Kiloan",
      "service_price": 7000,
      "estimated_service_time": "2 Hari",
      "createdAt": "2023-06-08T03:19:16.000Z",
      "updatedAt": "2023-06-08T03:19:16.000Z"
    },
    {
      "service_id": 2,
      "service_name": "Cuci Komplit Kilat",
      "service_type": "Kiloan",
      "service_price": 10000,
      "estimated_service_time": "1 Hari",
      "createdAt": "2023-06-08T03:19:16.000Z",
      "updatedAt": "2023-06-08T03:19:16.000Z"
    },
    {
      "service_id": 3,
      "service_name": "Cuci Komplit Express",
      "service_type": "Kiloan",
      "service_price": 15000,
      "estimated_service_time": "5 Jam",
      "createdAt": "2023-06-08T03:19:16.000Z",
      "updatedAt": "2023-06-08T03:19:16.000Z"
    },
  ]
}

```

#### Kesalahan (Errors)

| Kode | Deskripsi                                                  |
| ---- | ---------------------------------------------------------- |
| 401  | Unauthorized - Token tidak valid atau tidak ditemukan      |
| 403  | Forbidden - Akses ditolak karena peran pengguna bukan user |

### Menemukan Satu Layanan (Find One Service)

Operasi untuk mencari informasi tentang satu layanan tertentu berdasarkan kriteria tertentu.

#### Endpoint

```
GET /service/{service_id}?role_id=3 HTTP/1.1
```

#### Parameter Permintaan (Request Parameter)

| Parameter  | Tipe    | Wajib | Deskripsi               |
| ---------- | ------- | ----- | ----------------------- |
| service_id | integer | Ya    | ID layanan (service_id) |

#### Header Permintaan (Request Headers)

```
Authorization: Bearer <access_token>
```

#### Contoh Permintaan (Request Example)

```
GET /service/1 HTTP/1.1
Host: api.example.com
Authorization: Bearer <access_token>
```

#### Contoh Tanggapan (Response Example)

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "status": 200,
  "message": "OK",
  "data": {
    "service_id": 1,
    "service_name": "Cuci Komplit Reguler",
    "service_type": "Kiloan",
    "service_price": 7000,
    "estimated_service_time": "2 Hari",
    "createdAt": "2023-06-08T03:19:16.000Z",
    "updatedAt": "2023-06-08T03:19:16.000Z"
  }
}
```

#### Kesalahan (Errors)

| Kode | Deskripsi                                                        |
| ---- | ---------------------------------------------------------------- |
| 401  | Unauthorized - Token tidak valid atau tidak ditemukan            |
| 403  | Forbidden - Akses ditolak karena peran pengguna bukan basic user |
| 404  | Not Found - Data tidak valid atau tidak ditemukan                |

### Membuat Layanan Baru (Create Service)

Operasi untuk membuat layanan baru.

#### Endpoint

```
POST /service?role_id=2 HTTP/1.1
```

#### Contoh Badan Permintaan (Request Body Example)

| atribut                | tipe    | deskripsi              |
| ---------------------- | ------- | ---------------------- |
| service_name           | string  | Nama layanan           |
| service_type           | string  | Jenis layanan          |
| service_price          | integer | Harga layanan          |
| estimated_service_time | string  | Estimasi waktu layanan |

#### Header Permintaan (Request Headers)

```
Authorization: bearer <access_token>
```

#### Contoh Permintaan (Request Example)

```
POST /service HTTP/1.1
Host: api.example.com
Authorization: bearer <access_token>

{
  "service_name": "Kemeja",
  "service_type": "Satuan",
  "service_price": "4000",
  "estimated_service_time": "1 Hari",
}
```

#### Contoh Tanggapan (Response Example)

```
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8

{
  "status": 201,
  "message": "Created",
  "data": {
    "service_id": 7,
    "service_name": "Kemeja",
    "service_type": "Satuan",
    "service_price": "4000",
    "estimated_service_time": "1 Hari",
    "updatedAt": "2023-06-08T07:43:23.349Z",
    "createdAt": "2023-06-08T07:43:23.349Z"
  }
}

```

### Memperbarui Data Layanan (Update Service)

Operasi untuk memperbarui informasi satu layanan tertentu berdasarkan kriteria tertentu.

#### Endpoint

```
PUT /service/{service_id}?role_id=2
```

#### Parameter Permintaan (Request Parameter)

| Parameter  | Tipe    | Wajib | Deskripsi               |
| ---------- | ------- | ----- | ----------------------- |
| service_id | integer | Ya    | ID layanan (service_id) |

#### Header Permintaan (Request Headers)

```
Authorization: Bearer <access_token>
```

#### Contoh Permintaan (Request Example)

```
UPDATE /service/7 HTTP/1.1
Host: api.example.com
Authorization: Bearer <access_token>
{
  "service_name": "Kemeja",
  "service_type": "Satuan",
  "service_price": "5000",
  "estimated_service_time": "2 Hari",
}
```

#### Contoh Tanggapan (Response Example)

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "status": 200,
  "message": "Update Successfully",
  "data": {
    "service_id": 7,
    "service_name": "Kemeja",
    "service_type": "Satuan",
    "service_price": "5000",
    "estimated_service_time": "2 Hari",
    "createdAt": "2023-06-08T03:29:07.000Z",
    "updatedAt": "2023-06-08T07:51:47.225Z"
  }
}
```

#### Kesalahan (Errors)

| Kode | Deskripsi                                                                      |
| ---- | ------------------------------------------------------------------------------ |
| 400  | Bad Request - Kolom wajib diisi tidak ada pada badan permintaan (request body) |
| 401  | Unauthorized - Token tidak valid atau tidak ditemukan                          |
| 403  | Forbidden - Akses ditolak karena peran pegguna bukan admin                     |
| 404  | Not Found - Data tidak valid atau tidak ditemukan                              |

### Memperbarui Data Layanan (Patch Service)

Operasi untuk memperbarui beberapa informasi layanan tertentu berdasarkan kriteria tertentu.

#### Endpoint

```
PATCH /service/{service_id}?role_id=2
```

#### Parameter Permintaan (Request Parameter)

| Parameter  | Tipe    | Wajib | Deskripsi               |
| ---------- | ------- | ----- | ----------------------- |
| service_id | integer | Ya    | ID layanan (service_id) |

#### Header Permintaan (Request Headers)

```
Authorization: Bearer <access_token>
```

#### Contoh Permintaan (Request Example)

```
PATCH /service/7 HTTP/1.1
Host: api.example.com
Authorization: bearer <access_token>

{
  "service_price": 4000,
}
```

#### Contoh Tanggapan (Response Example)

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "status": 200,
  "message": "Patch Successfully",
  "data": {
    "service_id": 7,
    "service_name": "Kemeja",
    "service_type": "Satuan",
    "service_price": 4000,
    "estimated_service_time": "2 Hari",
    "createdAt": "2023-06-08T03:29:07.000Z",
    "updatedAt": "2023-06-08T07:51:47.000Z"
  }
}
```

#### Kesalahan (Errors)

| Kode | Deskripsi                                                   |
| ---- | ----------------------------------------------------------- |
| 401  | Unauthorized - Token tidak valid atau tidak ditemukan       |
| 403  | Forbidden - Akses ditolak karena peran pengguna bukan admin |
| 404  | Not Found - Data tidak valid atau tidak ditemukan           |

### Menghapus Data Layanan (Delete Service)

Operasi untuk menghapus data peran tertentu berdasarkan kriteria tertentu.

#### Endpoint

```
DELETE /service/{service_id}?role_id=2
```

#### Parameter Permintaan (Request Parameter)

| Parameter  | Tipe    | Wajib | Deskripsi             |
| ---------- | ------- | ----- | --------------------- |
| service_id | integer | Ya    | ID peran (service_id) |

#### Header Permintaan (Request Headers)

```
Authorization: Bearer <access_token>
```

#### Contoh Permintaan (Request Example)

```
DELETE /service/7
```

#### Contoh Tanggapan (Response Example)

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status": 200,
    "message": "Data has been deleted",
    "data": null
}
```

#### Kesalahan (Errors)

| Kode | Deskripsi                                                   |
| ---- | ----------------------------------------------------------- |
| 401  | Unauthorized - Token tidak valid atau tidak ditemukan       |
| 403  | Forbidden - Akses ditolak karena peran pengguna bukan admin |
| 404  | Not Found - Data tidak valid atau tidak ditemukan           |

## Pesanan (Orders)

### Daftar Semua Pesanan (Find All Orders)

Mengembalikan daftar semua pesanan yang terdaftar pada sistem.

#### Endpoint

```
GET /order HTTP/1.1
```

#### Header Permintaan (Request Headers)

```
Authorization: Bearer <access_token>
```

#### Contoh Permintaan (Request Example)

```
GET /order?role_id=3 HTTP/1.1
Host: api.example.com
Authorization: Bearer <access_token>
```

#### Contoh Respon (Response Example)

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "status": 200,
  "message": "OK",
  "data": [
    {
      "order_id": 1,
      "user_id": 4,
      "service_id": 4,
      "order_weight": "4 KG",
      "order_status": "Tertunda",
      "order_date": "2023-06-02T00:00:00.000Z",
      "createdAt": "2023-06-08T08:06:34.000Z",
      "updatedAt": "2023-06-08T08:06:34.000Z",
    },
    {
        "order_id": 2,
        "user_id": 3,
        "service_id": 2,
        "order_weight": "6 KG",
        "order_status": "Tertunda",
        "order_date": "2023-06-02T00:00:00.000Z",
        "createdAt": "2023-06-08T12:28:03.000Z",
        "updatedAt": "2023-06-08T12:28:03.000Z",
    },
    {
        "order_id": 3,
        "user_id": 4,
        "service_id": 4,
        "order_weight": "5 KG",
        "order_status": "Tertunda",
        "order_date": "2023-06-02T00:00:00.000Z",
        "createdAt": "2023-06-08T12:29:11.000Z",
        "updatedAt": "2023-06-08T12:29:11.000Z",
    }
  ]
}

```

#### Kesalahan (Errors)

| Kode | Deskripsi                                                  |
| ---- | ---------------------------------------------------------- |
| 401  | Unauthorized - Token tidak valid atau tidak ditemukan      |
| 403  | Forbidden - Akses ditolak karena peran pengguna bukan user |

### Menemukan Satu Pesanan (Find One Order)

Operasi untuk mencari informasi tentang satu pesanan tertentu berdasarkan kriteria tertentu.

#### Endpoint

```
GET /order/1?role_id=3 HTTP/1.1
```

#### Parameter Permintaan (Request Parameter)

| Parameter | Tipe    | Wajib | Deskripsi             |
| --------- | ------- | ----- | --------------------- |
| order_id  | integer | Ya    | ID Pesanan (order_id) |

#### Header Permintaan (Request Headers)

```
Authorization: Bearer <access_token>
```

#### Contoh Permintaan (Request Example)

```
GET /order/1 HTTP/1.1
Host: api.example.com
Authorization: bearer <access_token>
```

#### Contoh Tanggapan (Response Example)

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "status": 200,
  "message": "OK",
  "data": {
    "order_id": 1,
    "user_id": 4,
    "service_id": 4,
    "order_weight": "4 KG",
    "order_status": "Tertunda",
    "order_date": "2023-06-02T00:00:00.000Z",
    "createdAt": "2023-06-08T08:06:34.000Z",
    "updatedAt": "2023-06-08T08:06:34.000Z"
  }
}
```

#### Kesalahan (Errors)

| Kode | Deskripsi                                                  |
| ---- | ---------------------------------------------------------- |
| 401  | Unauthorized - Token tidak valid atau tidak ditemukan      |
| 403  | Forbidden - Akses ditolak karena peran pengguna bukan user |
| 404  | Not Found - Data tidak valid atau tidak ditemukan          |

### Membuat Pesanan Baru (Create Order)

Operasi untuk membuat pesanan baru.

#### Endpoint

```
POST /order?role_id=3 HTTP/1.1
```

#### Contoh Badan Permintaan (Request Body Example)

| atribut      | tipe    | deskripsi              |
| ------------ | ------- | ---------------------- |
| user_id      | integer | ID pengguna            |
| service_id   | integer | ID layanan             |
| order_weight | string  | Berat pesanan          |
| order_status | string  | Status pesanan         |
| order_date   | date    | Tanggal pesanan dibuat |

#### Header Permintaan (Request Headers)

```
Authorization: bearer <access_token>
```

#### Contoh Permintaan (Request Example)

```
POST /order HTTP/1.1
Host: api.example.com
Authorization: bearer <access_token>

{
  "user_id": "3",
  "service_id": "2",
  "order_weight": "1 KG",
  "order_status": "Tertunda",
}
```

#### Contoh Tanggapan (Response Example)

```
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8

{
  "status": 201,
  "message": "Created",
  "data": {
    "order_id": 1,
    "user_id": "3",
    "service_id": "2",
    "order_weight": "1 KG",
    "order_status": "Tertunda",
    "order_date": "2023-06-08T14:25:52.044Z",
    "updatedAt": "2023-06-08T14:25:52.046Z",
    "createdAt": "2023-06-08T14:25:52.046Z"
  }
}

```

### Memperbarui Data Pesanan (Update Order)

Operasi untuk memperbarui informasi satu pesanan tertentu berdasarkan kriteria tertentu.

#### Endpoint

```
PUT /order/{order_id}?role_id=3
```

#### Parameter Permintaan (Request Parameter)

| Parameter | Tipe    | Wajib | Deskripsi             |
| --------- | ------- | ----- | --------------------- |
| order_id  | integer | Ya    | ID pesanan (order_id) |

#### Header Permintaan (Request Headers)

```
Authorization: Bearer <access_token>
```

#### Contoh Permintaan (Request Example)

```
UPDATE /order/4?role_id=3 HTTP/1.1
Host: api.example.com
Authorization: Bearer <access_token>

{
  "user_id": 4,
  "service_id": 6,
  "order_weight": "1 KG",
  "order_status": "Selesai",
  "order_date": "2023-06-09",
}
```

#### Contoh Tanggapan (Response Example)

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "status": 200,
  "message": "Updated successfully",
  "data": {
    "order_id": 4,
    "user_id": 4,
    "service_id": 6,
    "order_weight": "1 KG",
    "order_status": "Selesai",
    "order_date": "2023-06-09T00:00:00.000Z",
    "createdAt": "2023-06-08T12:55:56.000Z",
    "updatedAt": "2023-06-08T14:35:56.583Z"
  }
}
```

#### Kesalahan (Errors)

| Kode | Deskripsi                                                                      |
| ---- | ------------------------------------------------------------------------------ |
| 400  | Bad Request - Kolom wajib diisi tidak ada pada badan permintaan (request body) |
| 401  | Unauthorized - Token tidak valid atau tidak ditemukan                          |
| 403  | Forbidden - Akses ditolak karena peran pegguna bukan basic user                |
| 404  | Not Found - Data tidak valid atau tidak ditemukan                              |

### Memperbarui Data Pesanan (Patch Order)

Operasi untuk memperbarui beberapa informasi pesanan tertentu berdasarkan kriteria tertentu.

#### Endpoint

```
PATCH /order/{order_id}?role_id=3
```

#### Parameter Permintaan (Request Parameter)

| Parameter | Tipe    | Wajib | Deskripsi             |
| --------- | ------- | ----- | --------------------- |
| order_id  | integer | Ya    | ID pesanan (order_id) |

#### Header Permintaan (Header Requests)

```
Authorization: Bearer <access_token>
```

#### Contoh Permintaan (Request Example)

```
PATCH /order/1 HTTP/1.1
Host: api.example.com
Authorization: Bearer <access_token
{
  "order_weight": "1 KG",
}
```

#### Contoh Tanggapan (Response Example)

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "status": 200,
  "message": "Patch Successfully",
  "data": {
    "order_id": 4,
    "user_id": 4,
    "service_id": 6,
    "order_weight": "1 KG",
    "order_status": "Selesai",
    "order_date": "2023-06-09T00:00:00.000Z",
    "createdAt": "2023-06-08T12:55:56.000Z",
    "updatedAt": "2023-06-08T14:35:56.000Z"
  }
}
```

#### Kesalahan (Errors)

| Kode | Deskripsi                                                        |
| ---- | ---------------------------------------------------------------- |
| 401  | Unauthorized - Token tidak valid atau tidak ditemukan            |
| 403  | Forbidden - Akses ditolak karena peran pengguna bukan basic user |
| 404  | Not Found - Data tidak valid atau tidak ditemukan                |

### Menghapus Data Pesanan (Delete Order)

Operasi untuk menghapus data pesanan tertentu berdasarkan kriteria tertentu.

#### Endpoint

```
DELETE /order/{order_id}
```

#### Parameter Permintaan (Request Parameter)

| Parameter | Tipe    | Wajib | Deskripsi             |
| --------- | ------- | ----- | --------------------- |
| order_id  | integer | Ya    | ID pesanan (order_id) |

#### Header Permintaan (Request Headers)

```
Authorization: Bearer <access_token>
```

#### Contoh Permintaan (Request Example)

```
UPDATE /order/4?role_id=3 HTTP/1.1
Host: api.example.com
Authorization: Bearer <access_token>
```

#### Contoh Tanggapan (Response Example)

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status": 200,
    "message": "Data has been deleted",
    "data": null
}
```

#### Kesalahan (Errors)

| Kode | Deskripsi                                                        |
| ---- | ---------------------------------------------------------------- |
| 401  | Unauthorized - Token tidak valid atau tidak ditemukan            |
| 403  | Forbidden - Akses ditolak karena peran pengguna bukan basic user |
| 404  | Not Found - Data tidak valid atau tidak ditemukan                |

## Pembayaran (Payments)

### Daftar Semua Pembayaran (Find All Payments)

Mengembalikan daftar semua pembayaran yang terdaftar pada sistem.

#### Endpoint

```
GET /payment?role_id=2 HTTP/1.1
```

#### Header Permintaan (Request Headers)

```
Authorization: Bearer <access_token>
```

#### Contoh Permintaan (Request Example)

```
GET /payment HTTP/1.1
Host: api.example.com
Authorization: Bearer <access_token>
```

#### Contoh Respon (Response Example)

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status": 200,
    "message": "OK",
    "data": [
        {
            "payment_id": 1,
            "order_id": 1,
            "payment_method": "Tunai",
            "payment_amount": 20000,
            "payment_date": "2023-06-02T00:00:00.000Z",
            "createdAt": "2023-06-08T14:41:37.000Z",
            "updatedAt": "2023-06-08T14:41:37.000Z"
        },
        {
            "payment_id": 2,
            "order_id": 2,
            "payment_method": "Bank Transfer",
            "payment_amount": 100000,
            "payment_date": "2023-06-02T00:00:00.000Z",
            "createdAt": "2023-06-08T14:41:54.000Z",
            "updatedAt": "2023-06-08T14:41:54.000Z"
        },
        {
            "payment_id": 3,
            "order_id": 3,
            "payment_method": "Kartu Kredit",
            "payment_amount": 50000,
            "payment_date": "2023-06-02T00:00:00.000Z",
            "createdAt": "2023-06-08T14:41:56.000Z",
            "updatedAt": "2023-06-08T14:41:56.000Z"
        },
    ]
}

```

#### Kesalahan (Errors)

| Kode | Deskripsi                                                   |
| ---- | ----------------------------------------------------------- |
| 401  | Unauthorized - Token tidak valid atau tidak ditemukan       |
| 403  | Forbidden - Akses ditolak karena peran pengguna bukan admin |

### Menemukan Satu Pembayaran (Find One Payment)

Operasi untuk mencari informasi tentang satu pembayaran tertentu berdasarkan kriteria tertentu.

#### Endpoint

```
GET /payment/1?role_id=3 HTTP/1.1
```

#### Parameter Permintaan (Request Parameter)

| Parameter  | Tipe    | Wajib | Deskripsi                  |
| ---------- | ------- | ----- | -------------------------- |
| payment_id | integer | Ya    | ID pembayaran (payment_id) |

#### Header Permintaan (Request Headers)

```
Authorization: Bearer <access_token>
```

#### Contoh Permintaan (Request Example)

```
GET /payment/1 HTTP/1.1
Host: api.example.com
Authorization: Bearer <access_token>
```

#### Contoh Tanggapan (Response Example)

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "status": 200,
  "message": "OK",
  "data": {
    "payment_id": 1,
    "order_id": 1,
    "payment_method": "Tunai",
    "payment_amount": 20000,
    "payment_date": "2023-06-02T00:00:00.000Z",
    "createdAt": "2023-06-08T14:41:37.000Z",
    "updatedAt": "2023-06-08T14:41:37.000Z"
  }
}
```

#### Kesalahan (Errors)

| Kode | Deskripsi                                                   |
| ---- | ----------------------------------------------------------- |
| 401  | Unauthorized - Token tidak valid atau tidak ditemukan       |
| 403  | Forbidden - Akses ditolak karena peran pengguna bukan admin |
| 404  | Not Found - Data tidak valid atau tidak ditemukan           |

### Membuat Pembayaran Baru (Create Payment)

Operasi untuk membuat pembayaran baru.

#### Endpoint

```
POST /payment?role_id=2 HTTP/1.1
```

#### Contoh Badan Permintaan (Request Body Example)

| atribut        | tipe             | deskripsi          |
| -------------- | ---------------- | ------------------ |
| order_id       | integer          | ID pesanan         |
| payment_method | enum atau string | Metode pembayaran  |
| payment_amount | integer          | Jumlah Pembayaran  |
| payment_date   | date             | Tanggal pembayaran |

#### Contoh Permintaan (Request Example)

```
POST /order HTTP/1.1
Host: api.example.com
Authorization: bearer <access_token>

{
  "order_id": "1",
  "payment_method": "Tunai",
  "payment_amount": "20000",
  "payment_date": "2023-06-02",
}
```

#### Contoh Tanggapan (Response Example)

```
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8

{
  "status": 201,
  "message": "Created",
  "data": {
    "payment_id": 1,
    "order_id": "1",
    "payment_method": "Tunai",
    "payment_amount": "15000",
    "payment_date": "2023-06-02T00:00:00.000Z",
    "updatedAt": "2023-06-08T14:41:57.774Z",
    "createdAt": "2023-06-08T14:41:57.767Z"
  }
}

```

### Memperbarui Data Pembayaran (Update Payment)

Operasi untuk memperbarui informasi pembayaran tertentu berdasarkan kriteria tertentu.

#### Endpoint

```
PUT /payment/{payment_id}?role_id=2
```

#### Parameter Permintaan (Request Parameter)

| Parameter  | Tipe    | Wajib | Deskripsi                  |
| ---------- | ------- | ----- | -------------------------- |
| payment_id | integer | Ya    | ID pembayaran (payment_id) |

#### Header Permintaan (Request Headers)

```
Authorization: Bearer <access_token>
```

#### Contoh Permintaan (Request Example)

```
UPDATE /payment/1 HTTP/1.1
Host: api.example.com
Authorization: Bearer <access_token>

{
  "order_id": 1,
  "payment_method": "Tunai",
  "payment_amount": "20000",
  "payment_date": "2023-06-08",
}
```

#### Contoh Tanggapan (Response Example)

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "status": 200,
  "message": "Update Successfully",
  "data": {
    "payment_id": 1,
    "order_id": 1,
    "payment_method": "Tunai",
    "payment_amount": "20000",
    "payment_date": "2023-06-08T00:00:00.000Z",
    "createdAt": "2023-06-08T14:41:37.000Z",
    "updatedAt": "2023-06-08T15:05:03.132Z"
  }
}
```

#### Kesalahan (Errors)

| Kode | Deskripsi                                                                      |
| ---- | ------------------------------------------------------------------------------ |
| 400  | Bad Request - Kolom wajib diisi tidak ada pada badan permintaan (request body) |
| 401  | Unauthorized - Token tidak valid atau tidak ditemukan                          |
| 403  | Forbidden - Akses ditolak karena peran pegguna bukan admin                     |
| 404  | Not Found - Data tidak valid atau tidak ditemukan                              |

### Memperbarui Data Pembayaran (Patch Payment)

Operasi untuk memperbarui beberapa informasi pembayaran tertentu berdasarkan kriteria tertentu.

#### Endpoint

```
PATCH /payment/{payment_id}?role_id=2
```

#### Parameter Permintaan (Request Parameter)

| Parameter  | Tipe    | Wajib | Deskripsi                  |
| ---------- | ------- | ----- | -------------------------- |
| payment_id | integer | Ya    | ID pembayaran (payment_id) |

#### Header Permintaan (Request Headers)

```
Authorization: Bearer <access_token>
```

#### Contoh Permintaan (Request Example)

```
PATCH /payment/2 HTTP/1.1
Host: api.example.com
Authorization: Bearer <access_token>
{
  "payment_amount": 100000,
}
```

#### Contoh Tanggapan (Response Example)

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "status": 200,
  "message": "Patch Successfully",
  "data": {
    "order_id": 2,
    "payment_method": "Bank Transfer",
    "payment_amount": "100000",
    "payment_date": "2023-06-08T00:00:00.000Z",
    "createdAt": "2023-06-08T14:41:37.000Z",
    "updatedAt": "2023-06-08T15:05:03.132Z"
  }
}
```

#### Kesalahan (Errors)

| Kode | Deskripsi                                                   |
| ---- | ----------------------------------------------------------- |
| 401  | Unauthorized - Token tidak valid atau tidak ditemukan       |
| 403  | Forbidden - Akses ditolak karena peran pengguna bukan admin |
| 404  | Not Found - Data tidak valid atau tidak ditemukan           |

### Menghapus Data Pembayaran (Delete Payment)

Operasi untuk menghapus data pembayaran tertentu berdasarkan kriteria tertentu.

#### Endpoint

```
DELETE /payment/{payment_id}?role_id=2
```

#### Parameter Permintaan (Request Parameter)

| Parameter  | Tipe    | Wajib | Deskripsi               |
| ---------- | ------- | ----- | ----------------------- |
| payment_id | integer | Ya    | ID layanan (payment_id) |

#### Header Permintaan (Request Headers)

```
Authorization: Bearer <access_token>
```

#### Contoh Permintaan (Request Example)

```
UPDATE /payment/4?role_id=2 HTTP/1.1
Host: api.example.com
Authorization: Bearer <access_token>
```

#### Contoh Tanggapan (Response Example)

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status": 200,
    "message": "Data has been deleted",
    "data": null
}
```

#### Kesalahan (Errors)

| Kode | Deskripsi                                                   |
| ---- | ----------------------------------------------------------- |
| 401  | Unauthorized - Token tidak valid atau tidak ditemukan       |
| 403  | Forbidden - Akses ditolak karena peran pengguna bukan admin |
| 404  | Not Found - Data tidak valid atau tidak ditemukan           |
