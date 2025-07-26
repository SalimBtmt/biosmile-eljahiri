import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";

export default function ContactUs() {
  return (
    <Dialog>
      <DialogTrigger className="bg-[#6095b5] text-white text-base px-5 py-2 rounded-full font-medium w-max mx-auto opacity-90 hover:opacity-100 transition-opacity duration-300">
        Prendre rendez-vous
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contactez-nous directement</DialogTitle>
          <DialogDescription className="text-center">
            Pour prendre rendez-vous ou poser une question, contactez-nous via
            téléphone ou WhatsApp.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 flex flex-col items-center gap-4">
          <p className="text-xl font-semibold">📞 +212 6 63 58 84 00</p>

          <div className="flex gap-4">
            <a
              href="tel:+212663588400"
              className="bg-[#6095b5] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#4b7a99] transition"
            >
              Appeler
            </a>
            <a
              href="https://wa.me/212663588400"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#1ebc5b] transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
