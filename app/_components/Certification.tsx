import { Certification as Cert } from "@/app/_types/types";
import { Card, CardContent } from "@/components/ui/card";
import ImageDialog from "./ImageDialog";

type Props = {
  cert: Cert;
  lang: "ar" | "en";
};

function Certification({ cert, lang }: Props) {
  return (
    <>
      <Card className="border border-border/50 hover:border-primary/50 transition-colors overflow-hidden group">
        <ImageDialog
          alt={cert.title[lang]}
          image={cert.image}
          title={cert.title[lang]}
        />
        <CardContent className="p-6 space-y-2">
          <h3 className="font-semibold group-hover:text-primary transition-colors">
            {cert.title[lang]}
          </h3>
          <p className="text-sm text-muted-foreground">
            {cert.issuer[lang]} • {cert.date}
          </p>
        </CardContent>
      </Card>
    </>
  );
}

export default Certification;
