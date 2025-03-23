import Form from '../form';
import Input from '../input';

export default function PhoneField() {
  return (
    <Form.Field>
      <Form.Label required>핸드폰 번호</Form.Label>
      <div className="flex items-center gap-2">
        <Form.Content
          name="phoneNumber.start"
          render={({ field }) => (
            <Input
              {...field}
              type="number"
              maxLength={3}
              className="bg-white text-body_nomal px-4 h-10 w-20 tabular-nums grow-0"
              placeholder="010"
            />
          )}
        />
        <div className="p-1.5 text-gray-600">-</div>
        <Form.Content
          name="phoneNumber.middle"
          render={({ field }) => (
            <Input
              {...field}
              type="number"
              maxLength={4}
              className="bg-white text-body_nomal px-4 h-10 tabular-nums w-24 grow-0 basis-1/3"
              placeholder="1234"
            />
          )}
        />
        <div className="p-1.5 text-gray-600">-</div>
        <Form.Content
          name="phoneNumber.end"
          render={({ field }) => (
            <Input
              {...field}
              type="number"
              maxLength={4}
              className="bg-white text-body_nomal px-4 h-10 tabular-nums w-24 grow-0 basis-1/3"
              placeholder="5678"
            />
          )}
        />
      </div>
    </Form.Field>
  );
}
