import { type ProductDataProfile, imageTypeLabel } from "@/lib/product-profile";

type Props = {
  data: ProductDataProfile;
  fallbackCaption?: string;
};

export function ProductImageStatus({ data, fallbackCaption }: Props) {
  return (
    <div className="text-xs text-slate-500 mt-2 space-y-1">
      <p>
        <span className="text-slate-400">Image type:</span> {imageTypeLabel(data.imageType)}
        {data.imageSourceNote ? (
          <> — {data.imageSourceNote}</>
        ) : (
          fallbackCaption && <> — {fallbackCaption}</>
        )}
      </p>
      {data.imageVerificationNote && <p>{data.imageVerificationNote}</p>}
      {data.imageLastVerifiedAt && (
        <p className="text-slate-600">Image last verified: {data.imageLastVerifiedAt}</p>
      )}
    </div>
  );
}
