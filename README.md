# 🚀 Персональный Энергетический Календарь — Инструкция по запуску

## Файлы проекта

```
index.html          ← Главная страница (лендинг)
login.html          ← Страница входа/регистрации
cabinet.html        ← Личный кабинет клиента
admin.html          ← Панель администратора
calendar-page.html  ← Страница календаря
psycho-page.html    ← Страница психоанализа
personal-energy-calendar.html ← Основной инструмент
```

---

## ШАГ 1 — Создать аккаунт Supabase (бесплатно)

1. Зайдите на https://supabase.com
2. Нажмите "Start your project"
3. Войдите через GitHub
4. Создайте новый проект (название: energy-calendar)
5. Дождитесь создания (1-2 минуты)

---

## ШАГ 2 — Создать таблицу в базе данных

В Supabase → SQL Editor → вставьте и выполните:

```sql
-- Таблица профилей клиентов
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE,
  name TEXT,
  email TEXT,
  plan TEXT DEFAULT 'basic',
  role TEXT DEFAULT 'client',
  is_active BOOLEAN DEFAULT false,
  psycho_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  PRIMARY KEY (id)
);

-- Разрешения
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Admin can do everything"
  ON profiles FOR ALL
  USING (
    auth.uid() IN (
      SELECT id FROM profiles WHERE role = 'admin'
    )
  );

-- Автоматически создаём профиль при регистрации
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, email)
  VALUES (NEW.id, NEW.email);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();
```

---

## ШАГ 3 — Получить ключи Supabase

В Supabase → Settings → API:
- `Project URL` → скопируйте
- `anon public key` → скопируйте

---

## ШАГ 4 — Вставить ключи в файлы

В каждом файле (login.html, admin.html, cabinet.html) найдите:

```javascript
const SUPABASE_URL = 'https://YOUR_PROJECT.supabase.co';
const SUPABASE_KEY = 'YOUR_ANON_KEY';
```

Замените на ваши реальные ключи.

---

## ШАГ 5 — Создать аккаунт администратора

1. Откройте login.html → Регистрация
2. Зарегистрируйтесь с вашим email
3. В Supabase → Table Editor → profiles
4. Найдите вашу запись и измените:
   - `role` → `admin`
   - `is_active` → `true`

---

## ШАГ 6 — Выгрузить на GitHub Pages (бесплатно)

1. Создайте аккаунт на https://github.com
2. Создайте новый репозиторий (название: energy-calendar)
3. Загрузите все HTML файлы
4. Settings → Pages → Branch: main → Save
5. Ваш сайт: `https://ВАШ_НИК.github.io/energy-calendar`

---

## ШАГ 7 — Подключить домен (опционально)

1. Купите домен на https://www.ps.kz (например energycalendar.kz)
2. В GitHub Pages → Custom domain → введите домен
3. В настройках домена добавьте CNAME запись

---

## Как давать доступ клиентам

1. Клиент регистрируется на сайте
2. Вы получаете уведомление (в Supabase → Realtime)
3. Заходите в admin.html
4. Нажимаете "Активировать" для нужного клиента
5. При необходимости — "→ Полный" для апгрейда тарифа

---

## Контакты для поддержки

Ислам Iлияс · Digital Consulting
