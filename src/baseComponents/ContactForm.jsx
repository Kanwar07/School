import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

function ContactForm() {
  return (
    <div className="w-full h-full border p-8 bg-[#ffffff]/[0.8] rounded-xl shadow-2xl">
      <div className="flex flex-col justify-center items-center max-sm:flex-col max-sm:items-center">
        <div className="flex flex-col gap-4 mr-10 mb-10 max-sm:mr-0">
          <div className="text-[24px] text-[#101828] font-bold mb-4">
            Leave your contacts and we will contact you
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col">
              <span className="text-[13px] text-[#667085] font-medium">
                Name
              </span>
              <Input
                type="name"
                placeholder="Name"
                className="border-0 border-[#000000] border-b-2 focus:border-[#4BB543] rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] text-[#667085] font-medium">
                Email
              </span>
              <Input
                type="email"
                placeholder="Email"
                className="border-0 border-[#000000] border-b-2 focus:border-[#4BB543] rounded-lg"
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <span className="text-[13px] text-[#667085] font-medium">
                Message
              </span>
              <Input
                type="Message"
                placeholder="Message"
                className="border-0 border-b-2 border-[#000000] focus:border-[#4BB543] rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-2 rounded-xl text-[#ffffff] cursor-pointer">
          <Button>Submit</Button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
